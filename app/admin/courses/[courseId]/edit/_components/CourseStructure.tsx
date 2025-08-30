"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DndContext, DraggableSyntheticListeners, KeyboardSensor, PointerSensor, rectIntersection, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ReactNode, useEffect, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
// import { AdminCourseSingularType } from "@/app/data/admin/admin-get-courses";
// app/admin/courses/[courseId]/edit/_components/CourseStructure.tsx
import type { AdminCourseSingularType } from "@/app/data/admin/admin-get-course";
import { string } from "zod";
import { cn } from "@/lib/utils";
import { listenKeys } from "better-auth/react";
import { Collapsible } from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight, FileText, GripVertical, Trash2 } from "lucide-react";
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { reorderChapters, reorderLesson } from "../actions";
import { NewChapterModel } from "./NewChapterModel";
import { NewLessonModel } from "./NewLessonModel";
import { DeleteLesson } from "./DeleteLesson";
import { DeleteChapter } from "./DeleteChapter";

interface iAppProps {
    data: AdminCourseSingularType
}

interface ChapterItem {
    id: string;
    title: string;
    order: number;
    isOpen: boolean;
    lessons: {
        id: string;
        title: string;
        order: number;
    }[];
}

interface SortableItemProps {
    id: string;
    children: (listeners: DraggableSyntheticListeners) => ReactNode
    className?: string,
    data?: {
        type: "chapter" | "lesson";
        chapterId?: string;
    }
}

export function CourseStructure({ data }: iAppProps) {
    const initialItems: ChapterItem[] = data.chapter.map((chapter) => ({
        id: chapter.id,
        title: chapter.title || `Chapter ${chapter.position}`,
        order: chapter.position,
        isOpen: false,
        lessons: chapter.lessons.map((lesson) => ({
            id: lesson.id,
            title: lesson.title || `Lesson ${lesson.position}`,
            order: lesson.position,
        })),
    }));

    const [items, setItems] = useState(initialItems);

    console.log(items)



    useEffect(() => {
        setItems((prevItems) => {
            const updatedItems =
                data.chapter.map((chapter) => ({
                    id: chapter.id,
                    title: chapter.title || `Chapter ${chapter.position}`,
                    order: chapter.position,
                    isOpen: prevItems.find((item) => item.id === chapter.id)?.isOpen ?? true,
                    lessons: chapter.lessons.map((lesson) => ({
                        id: lesson.id,
                        title: lesson.title || `Lesson ${lesson.position}`,
                        order: lesson.position,
                    })),

                })) || []
            return updatedItems
        })
    }, [data]);

    function SortableItem({ children, id, className, data }: SortableItemProps) {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isDragging,
        } = useSortable({ id, data });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        return (
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                className={cn("touch-none", className, isDragging && "opacity-50")}
            >
                {children(listeners)}
            </div>
        );
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }
        const activeId = active.id;
        const overId = over.id;
        const activeType = active.data.current?.type as "chapter" | "lesson";
        const overType = over.data.current?.type as "chapter" | "lesson";
        const courseId = data.id;


        if (activeType === "chapter") {
            if (overType === 'lesson') {
                toast.error('Cannot move a chapter into another chapter');
                return;
            }

            const oldIndex = items.findIndex((item) => item.id === String(activeId));
            const newIndex = items.findIndex((item) => item.id === String(overId));

            if (oldIndex === -1 || newIndex === -1) {
                toast.error("Could not determine the chapter for reordering");
                return;
            }

            const recordedLocalChapters = arrayMove(items, oldIndex, newIndex);

            const updatedChapterForState = recordedLocalChapters.map((chapter, index) => ({
                ...chapter,
                order: index + 1,
            }));

            const previousItems = [...items];

            setItems(updatedChapterForState);



            if (courseId) {
                const chapterToUpdate = updatedChapterForState.map((chapter) => ({
                    id: chapter.id,
                    position: chapter.order,
                }));
                const reorderPromise = () =>
                    reorderChapters(courseId, chapterToUpdate);

                toast.promise(reorderPromise(), {
                    loading: "Reordering chapters...",
                    success: (result) => {
                        if (result.status === "success")
                            return result.message;

                        throw new Error(result.message);
                    },
                    error: () => {
                        setItems(previousItems);
                        return ("Failed to reorder chapters");
                    },
                });
            }
            return;
        }
        if (activeType === 'lesson' && overType === 'lesson') {
            const chapterId = over.data.current?.chapterId;
            const overChapterId = over.data.current?.chapterId;


            if (!chapterId || chapterId !== overChapterId) {
                toast.error("lesson move between different chapters or invalid chapter ID is not allowed");
                return;
            }



            const chapterIndex = items.findIndex(
                (chapter) => chapter.id === chapterId
            );

            if (chapterIndex === -1) {
                toast.error('could not find chapter')
                return;
            }


            const chapterUpdate = items[chapterIndex];


            const oldLessonIndex = chapterUpdate.lessons.findIndex(
                (lesson) => lesson.id === activeId
            );


            const newLessonIndex = chapterUpdate.lessons.findIndex(
                (lesson) => lesson.id === overId
            );



            if (oldLessonIndex === -1 || newLessonIndex === -1) {
                toast.error("could not find lesson for recording")
                return;
            };


            const recordecLessons = arrayMove(
                chapterUpdate.lessons,
                oldLessonIndex,
                newLessonIndex
            );


            const updateLessonForState = recordecLessons.map((lesson, index) => ({
                ...lesson,
                order: index + 1,
            }));


            const newItems = [...items];


            newItems[chapterIndex] = {
                ...chapterUpdate,
                lessons: updateLessonForState,
            };


            const previousItems = [...items];


            setItems(newItems);


            if (courseId) {
                const lessonToUpdate = updateLessonForState.map((lesson) => ({
                    id: lesson.id,
                    position: lesson.order,
                }));


                const reorderLessonPromise = () => reorderLesson(chapterId, lessonToUpdate, courseId);


                toast.promise(reorderLessonPromise(), {
                    loading: "Reorderning lessons...",
                    success: (result) => {
                        if (result.status === "success") return result.message;
                        throw new Error(result.message)
                    },
                    error: () => {
                        setItems(previousItems);
                        return "failed to reorder lesson"
                    }
                });
            }

            return;
        }

    }










    //     setItems((items) => {
    //         const oldIndex = items.findIndex(item => item.id === active.id.toString());
    //         const newIndex = items.findIndex(item => item.id === over.id.toString());

    //         if (oldIndex === -1 || newIndex === -1) return items;

    //         const newItems = arrayMove(items, oldIndex, newIndex);

    //         // Update the order property based on new position
    //         return newItems.map((item, index) => ({
    //             ...item,
    //             order: index + 1,
    //             lessons: item.lessons.map((lesson, lessonIndex) => ({
    //                 ...lesson,
    //                 order: lessonIndex + 1
    //             }))
    //         }));
    //     });
    // }

    function toggleChapter(chapterId: string) {
        setItems((prevItems) =>
            prevItems.map((chapter) =>
                chapter.id === chapterId
                    ? { ...chapter, isOpen: !chapter.isOpen }
                    : chapter
            )
        );
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    return (
        <DndContext collisionDetection={rectIntersection} onDragEnd={handleDragEnd} sensors={sensors}>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between border-b border-border">
                    <CardTitle>Chapters</CardTitle>
                    <NewChapterModel courseId={data.id} />
                </CardHeader>
                <CardContent className="space-y-8">
                    <SortableContext
                        items={items}
                        strategy={verticalListSortingStrategy}>
                        {items.map((item) => (
                            <SortableItem
                                id={item.id}
                                data={{ type: "chapter" }}
                                key={item.id}
                            >
                                {(listeners: DraggableSyntheticListeners) => (
                                    <Card>
                                        <Collapsible
                                            open={item.isOpen}
                                            onOpenChange={() => toggleChapter(item.id)}
                                        >
                                            <div className="flex items-center justify-start p-3 border-b border-border">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        {...listeners}>
                                                        <GripVertical className="size-4" />
                                                    </Button>
                                                    <CollapsibleTrigger asChild>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="flex items-center">
                                                            {item.isOpen ? (
                                                                <ChevronDown className="size-4" />
                                                            ) : (
                                                                <ChevronRight className="size-4" />
                                                            )}
                                                        </Button>
                                                    </CollapsibleTrigger>


                                                    <p className="corsor-pointer hover:text-primary pl-2">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                {/* <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="ml-auto text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                                >
                                                    <Trash2 className="size-4" />
                                                </Button> */}

                                                <DeleteChapter chapterId={item.id} courseId={data.id} />
                                            </div>

                                            <CollapsibleContent>
                                                <div>
                                                    <SortableContext items={item.lessons.map((lesson) => lesson.id)}
                                                        strategy={verticalListSortingStrategy}
                                                    >

                                                        {item.lessons.map((lesson) => (
                                                            <SortableItem
                                                                key={lesson.id}
                                                                id={lesson.id}
                                                                data={{ type: "lesson", chapterId: item.id }}
                                                            >

                                                                {(lessonListeners) => (
                                                                    <div className="flex items-center justify-between p-2 w-full">
                                                                        <div className="flex items-center gap-2 flex-1">
                                                                            <Button variant="ghost" size="icon"
                                                                                {...lessonListeners}
                                                                                className="hover:bg-transparent"
                                                                            >
                                                                                <GripVertical className="size-4" />
                                                                            </Button>

                                                                            <FileText className="size-4" />
                                                                            <Link
                                                                                href={`/admin/courses/${data.id}/${item.id}/${lesson.id}`}
                                                                                className="flex-1 hover:text-primary pl-2"
                                                                            >
                                                                                {lesson.title}
                                                                            </Link>
                                                                        </div>
                                                                        <DeleteLesson
                                                                            chapterId={item.id}
                                                                            lessonId={lesson.id}
                                                                            courseId={data.id} />
                                                                    </div>
                                                                )}
                                                            </SortableItem>
                                                        ))}

                                                    </SortableContext>
                                                    <div className="p-2">
                                                        <NewLessonModel chapterId={item.id} courseId={data.id} />
                                                    </div>
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </Card>
                                )}
                            </SortableItem>
                        ))}
                    </SortableContext>
                </CardContent>
            </Card>
        </DndContext>
    );
}