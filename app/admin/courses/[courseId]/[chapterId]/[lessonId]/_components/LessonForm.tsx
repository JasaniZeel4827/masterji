// "use client";

// import { AdminLessonType } from "@/app/data/admin/admin-get-lesson";

// interface iAppProps {
//     data: AdminLessonType;
//     chapterId: string
// }

// export function LessonPage({chapterId, data}: iAppProps) {
//     return (
//         <div>
//             <h1>
//                 web tokens with jwt tokens
//             </h1>
//         </div>
//     )
// }




"use client";

import { AdminLessonType } from "@/app/data/admin/admin-get-lesson";

interface iAppProps {
  data: AdminLessonType;
  chapterId: string;
}

export function LessonForm(props: iAppProps) {
  const { chapterId, data } = props;

  return (
    <div>
      <h1>better auth, next js and prisma</h1>
    </div>
  );
}