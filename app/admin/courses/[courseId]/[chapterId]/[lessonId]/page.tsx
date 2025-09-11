import { adminGetLesson } from "@/app/data/admin/admin-get-lesson";
// import { LessonForm } from "../_components/LessonForm";
import { LessonForm } from "./_components/LessonForm";

type Params = Promise<{
  courseId: string;
  chapterId: string;
  lessonId: string;
}>;

export default async function LessonIdPage({ params }: { params: Params }) {
  const { chapterId, courseId, lessonId } = await params;
  const lesson = await adminGetLesson(lessonId);

  return <LessonForm data={lesson} chapterId={chapterId} />;
}




// type Params = Promise<{
//     courseId: string;
//     chapterId: string;
//     lessonId: string;
// }>

// export default async function LessonIdPage({Params}: {params: Params}) {
//     const { chapterId, courseId, lessonId } = await Params;
//     const lesson = await adminGetLesson


//     return (
//       <LessonForm data={lesson} chapterId={chapterId} />
//     )
    
// }