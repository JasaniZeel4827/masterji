"use server";

import { requireAdmin } from "@/app/data/admin/require-admin";
import { ApiResponse } from "@/lib/types";
import { ChapterSchemaType, CourseSchemaType, chapterSchema, courseSchema, lessonSchema } from "@/lib/zodSchemas";
import { prisma } from "@/lib/db";
import arcjet, { detectBot, fixedWindow } from "@/lib/arcjet";
import { request } from "@arcjet/next";
import { revalidatePath } from "next/cache";




const aj = arcjet
    .withRule(
        detectBot({
            mode: "LIVE",
            allow: [],
        })
    ).withRule(
        fixedWindow({
            mode: "LIVE",
            window: "1m",
            max: 2,
        })
    );



// import { requireAdmin } from "@/app/data/admin/require-admin";
// import { ApiResponse } from "@/lib/types";


export async function editCourse(data: CourseSchemaType, courseId: string): Promise<ApiResponse> {
    try {
        // const req = await request();
        // const decision = await aj.protect(req, {
        //     fingerprint: user.user.id
        // });


        const user = await requireAdmin();
        const req = await request();
        const decision = await aj.protect(req, {
            fingerprint: user.user.id,
        });




        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return {
                    status: "error",
                    message: "you have been blocked due to rate limit, from masterji.com"
                };
            } else {
                return {
                    status: 'error',
                    message: 'i think you are bot'
                };
            }
        }



        try {
            const result = courseSchema.safeParse(data);


            if (!result.success) {
                return {
                    status: "error",
                    message: "invalid data",
                }
            }
        } catch (error) {
            return {
                status: "error",
                message: "Data validation failed",
            };
        }

        await prisma.course.update({
            where: {
                id: courseId,
                userId: user.user.id,
            },
            data: {
                ...data,
            }
        });

        return {
            status: "success",
            message: "Course updated successfully",
        };
    } catch {
        return {
            status: "error",
            message: "Failed to update course",
        };
    }
}

export async function reorderLesson(
    chapterId: string,
    lesson: { id: string; position: number }[],
    courseId: string
): Promise<ApiResponse> {
    await requireAdmin();
    try {
        if (!lesson || lesson.length === 0) {
            return {
                status: "error",
                message: "no lesson provided for reorderning"
            };
        }


        // const updates = lesson.map((lesson) => ({
        //     prisma.lesson.update({
        //         where: {
        //             id: lesson.id,
        //             chapterId: chapterId,
        //         },
        //         data: {
        //             position: lesson
        //         }
        //     })
        // }))


        const updates = lesson.map((lesson: { id: string; position: number }) =>
            prisma.lesson.update({
                where: {
                    id: lesson.id,
                    chapterId: chapterId,
                },
                data: {
                    position: lesson.position,
                }
            })
        );


        await prisma.$transaction(updates);


        revalidatePath(`/admin/courses/${courseId}/edit`)


        return {
            status: "success",
            message: "lessons reorder successfully"
        }
    } catch {
        return {
            status: "error",
            message: "failed to reorder lessson"
        }
    }

}


export async function reorderChapters(
    courseId: string,
    chapters: { id: string; position: number }[]
): Promise<ApiResponse> {
    await requireAdmin();
    try {
        if (!chapters || chapters.length === 0) {
            return {
                status: "error",
                message: "no chapter are provided here"
            };
        }

        const updates = chapters.map((chapter) => prisma.chapter.update({
            where: {
                id: chapter.id,
                courseId: courseId,
            },
            data: {
                position: chapter.position,
            }
        }))

        await prisma.$transaction(updates);

        revalidatePath(`/admin/courses/${courseId}/edit`)

        return {
            status: "success",
            message: "chapter reorder successfully"
        }

    } catch {
        return {
            status: "error",
            message: "failed to reorder chapter"
        }
    }
}




export async function createChapter(values: ChapterSchemaType): Promise<ApiResponse> {

    await requireAdmin();
    try {
        const result = chapterSchema.safeParse(values);


        if (!result.success) {
            return {
                status: "error",
                message: "invalid data"
            };

        }

        await prisma.$transaction(async (tx) => {
            const maxPos = await tx.chapter.findFirst({
                where: {
                    courseId: result.data.courseId,
                },
                select: {
                    position: true,
                },
                orderBy: {
                    position: "desc",
                },
            });

            await tx.chapter.create({
                data: {
                    title: result.data.name,
                    courseId: result.data.courseId,
                    position: (maxPos?.position ?? 0) + 1,
                },
            });
        });
        revalidatePath(`/admin/courses/${result.data.courseId}/edit`)

        return {
            status: "success",
            message: "chapter created successfully"
        }
    } catch {
        return {
            status: "error",
            message: "failed to create chapter"
        };
    }
}








export async function createLesson(values: {
    name: string;
    courseId: string;
    chapterId: string
}): Promise<ApiResponse> {
    try {
        await requireAdmin();

        await prisma.$transaction(async (tx) => {
            const maxPos = await tx.lesson.findFirst({
                where: {
                    chapterId: values.chapterId,
                },
                select: {
                    position: true,
                },
                orderBy: {
                    position: "desc",
                },
            });

            await tx.lesson.create({
                data: {
                    title: values.name,
                    chapterId: values.chapterId,
                    position: (maxPos?.position ?? 0) + 1,
                    description: "",
                    videoKey: "",
                    thumbnailKey: ""
                },
            });
        });

        revalidatePath(`/admin/courses/${values.courseId}/edit`);

        return {
            status: "success",
            message: "Lesson created successfully"
        };
    } catch (error) {
        console.error("Error creating lesson:", error);
        return {
            status: "error",
            message: "Failed to create lesson"
        };
    }
}




export async function deleteLesson({
    chapterId,
    courseId,
    lessonId,
}: {
    chapterId: string;
    courseId: string;
    lessonId: string
}): Promise<ApiResponse> {
    await requireAdmin();

    try {
        const chapterWithLesson = await prisma.chapter.findUnique({
            where: {
                id: chapterId,
            },
            select: {
                lessons: {
                    orderBy: {
                        position: "asc",
                    },
                    select: {
                        id: true,
                        position: true
                    },
                },
            },
        });


        if (!chapterWithLesson) {
            return {
                status: "error",
                message: "chapter not found"
            };
        }


        const lesson = chapterWithLesson.lessons


        const lessonToDelete = lesson.find((lesson) => lesson.id === lessonId);

        if (!lessonToDelete) {
            return {
                status: "error",
                message: "lesson not found"

            };
        }


        const remainingLessons = lesson.filter((lesson) => lesson.id !== lessonId);



        const updates = remainingLessons.map((lesson, index) => {
            return prisma.lesson.update({
                where: { id: lesson.id },
                data: { position: index + 1 },
            });
        });

        await prisma.$transaction([
            ...updates,
            prisma.lesson.delete({
                where: {
                    id: lessonId,
                    chapterId: chapterId,
                },
            }),
        ]);
        revalidatePath(`/admin/courses/${courseId}/edit`);

        return {
            status: "success",
            message: "lesson deleted successfully"
        };

    } catch {
        return {
            status: "error",
            message: "failed to delete lesson"
        }
    }
}







export async function deleteChapter({
    chapterId,
    courseId,
}: {
    chapterId: string;
    courseId: string;
}): Promise<ApiResponse> {
    await requireAdmin();

    try {
        // First, get the chapter with its lessons
        const chapterWithLessons = await prisma.chapter.findUnique({
            where: { id: chapterId },
            include: {
                lessons: {
                    select: { id: true },
                },
            },
        });

        if (!chapterWithLessons) {
            return {
                status: "error",
                message: "Chapter not found"
            };
        }

        // Get all chapters for position updates
        const courseWithChapters = await prisma.course.findUnique({
            where: { id: courseId },
            select: {
                chapter: {
                    orderBy: { position: "asc" },
                    select: {
                        id: true,
                        position: true,
                    },
                },
            },
        });

        if (!courseWithChapters) {
            return {
                status: "error",
                message: "Course not found"
            };
        }

        const chapters = courseWithChapters.chapter;
        const remainingChapters = chapters.filter((chap) => chap.id !== chapterId);

        // Create transaction operations
        const transactionOperations = [];

        // 1. First delete all lessons in the chapter
        if (chapterWithLessons.lessons.length > 0) {
            transactionOperations.push(
                prisma.lesson.deleteMany({
                    where: { chapterId }
                })
            );
        }

        // 2. Update positions of remaining chapters
        const positionUpdates = remainingChapters
            .filter((chap, index) => chap.position !== index + 1)
            .map((chap, index) => {
                return prisma.chapter.update({
                    where: { id: chap.id },
                    data: { position: index + 1 },
                });
            });

        transactionOperations.push(...positionUpdates);

        // 3. Finally, delete the chapter
        transactionOperations.push(
            prisma.chapter.delete({
                where: { id: chapterId },
            })
        );

        await prisma.$transaction(transactionOperations);
        
        revalidatePath(`/admin/courses/${courseId}/edit`);

        return {
            status: "success",
            message: "Chapter and its lessons deleted successfully"
        };

    } catch (error) {
        console.error('Error deleting chapter:', error);
        return {
            status: "error",
            message: error instanceof Error ? error.message : "Failed to delete chapter"
        };
    }
}
