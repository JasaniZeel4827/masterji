(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": ()=>Badge,
    "badgeVariants": ()=>badgeVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": ()=>Card,
    "CardAction": ()=>CardAction,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(public)/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// // import Image from "next/image";
// "use client";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ui/themeToggle";
// // import { auth } from "@/lib/auth";
// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// // import { headers } from "next/headers";
// export default async function Home() {
//   const router = useRouter();
//   const { data: session } = await authClient.useSession();
//   async function signOut() {
//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.push("/");
//         },
//       },
//     });
//   }
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center gap-4">
//       <h1 className="text-3xl font-bold underline animate-pulse animate-spotlight bg-gradient-to-r bg-emerald-400 to-sky-700 from-emerald-500 bg-clip-text text-transparent">
//         hello world
//       </h1>
//       <ThemeToggle />
//       {session ? (
//         <div>
//           <p>{session.user.name}</p>
//           <Button
//             onClick={signOut}>
//             Logout
//           </Button>
//         </div>
//       ) : (
//         <Button>login</Button>
//       )}
//     </div>
//   );
// }
// 
// // "use client";
// import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button"
// import { buttonVariants } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { ZeelThemeToggle } from "@/components/ui/ZeelThemeToggle";
// import { auth } from "@/lib/auth";
// // import { authClient } from "@/lib/auth-client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// // import router from "next/router";
// interface featuresProps {
//     title: string,
//     description: string,
//     icon: string;
// }
// const features: featuresProps[] = [
//     {
//         title: "Comprehensive Courses",
//         description: "Access a wide range of carefully curated courses designed by industry experts.",
//         icon: "📚"
//     },
//     {
//         title: "Interactive Learning",
//         description: "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
//         icon: "🎮"
//     },
//     {
//         title: "Progress Tracking",
//         description: "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
//         icon: "📊", // The image shows an empty string for the icon property.
//     },
//     {
//         title: "Community Support",
//         description: "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
//         icon: '👥', // The image shows an empty string for the icon property.
//     },
// ];
// export default function Home() {
//     // const router = useRouter
//     // // const default async function Home() {
//     // const { data: session } = authClient.useSession();
//     // async function signOut() {
//     //     await authClient.signOut({
//     //         fetchOptions: {
//     //             onSuccess: () => {
//     //                 router.push("/")
//     //                 toast.success('logout successfully')
//     //             },
//     //         },
//     //     });
//     // }
//     return (
//         // <div className="p-24">
//         //   <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 animate-gradient tracking-wide leading-snug">
//         //     hi i am zeel jasani welcome to my platform <span className="glow-text">masterji</span> where you master your learning journey with masterji
//         //   </h1>
//         //   <ZeelThemeToggle />
//         //   {session ? (
//         //     <div>
//         //       <p>{session.user.name}</p>
//         //       <Button onClick={signOut}>Logout</Button>
//         //     </div>
//         //   )  : (
//         //     <Button>login</Button>
//         //   )} 
//         // </div>
//         <>
//             <section className="reletive py-20">
//                 <div className="flex flex-col items-center text-center space-y-8">
//                     <Badge variant="outline">
//                         The Future of Online Education
//                     </Badge>
//                     <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
//                     <p className="max-w-[700px] text-muted-foreground md:text-xl">
//                         Discover a new way to learn with our modern, interactive learning
//                         management system. Access high-quality courses anytime, anywhere.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 mt-8">
//                         <Link
//                             className={buttonVariants({
//                                 size: "lg",
//                             })}
//                             href="/courses"
//                         >
//                             Explore Courses
//                         </Link>
//                         <Link
//                             className={buttonVariants({
//                                 size: "lg",
//                                 variant: "outline"
//                             })}
//                             href="/login"
//                         >
//                             Sign In
//                         </Link>
//                     </div>
//                 </div>
//             </section>
//             {/* another section */}
//             {/* <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {features.map((feature, index) => (
//                     <Card key={index} className="hover:shadow-lg transition-shadow">
//                         <CardHeader>
//                             <div className="text-4xl mb-4">
//                                 {feature.icon}
//                             </div>
//                         </CardHeader>
//                     </Card>
//                 ))}
//             </section> */}
//             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
//                 {features.map((feature, index) => (
//                     <Card key={index} className="hover:shadow-lg transition-shadow">
//                         <CardHeader>
//                             <div className="text-4xl mb-4">{feature.icon}</div>
//                             <CardTitle>{feature.title}</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-muted-foreground">{feature.description}</p>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </section>
//         </>
//     );
// }
// chat gpt no code
// "use client";
// import { Badge } from "@/components/ui/badge";
// import { buttonVariants } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { auth } from "@/lib/auth";
// import Link from "next/link";
// import { toast } from "sonner";
// interface featuresProps {
//   title: string;
//   description: string;
//   icon: string;
// }
// const features: featuresProps[] = [
//   {
//     title: "Comprehensive Courses",
//     description: "Access a wide range of carefully curated courses designed by industry experts.",
//     icon: "📚",
//   },
//   {
//     title: "Interactive Learning",
//     description: "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
//     icon: "🎮",
//   },
//   {
//     title: "Progress Tracking",
//     description: "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
//     icon: "📊",
//   },
//   {
//     title: "Community Support",
//     description: "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
//     icon: "👥",
//   },
// ];
// export default function Home() {
//   return (
//     <>
//       <section className="reletive py-20">
//         <div className="flex flex-col items-center text-center space-y-8">
//           <Badge variant="outline">The Future of Online Education</Badge>
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             Elevate your Learning Experience
//           </h1>
//           <p className="max-w-[700px] text-muted-foreground md:text-xl">
//             Discover a new way to learn with our modern, interactive learning
//             management system. Access high-quality courses anytime, anywhere.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <Link
//               className={buttonVariants({
//                 size: "lg",
//               })}
//               href="/courses"
//             >
//               Explore Courses
//             </Link>
//             <Link
//               className={buttonVariants({
//                 size: "lg",
//                 variant: "outline",
//               })}
//               href="/login"
//             >
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </section>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
//         {features.map((feature, index) => (
//           <Card key={index} className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <CardTitle>{feature.title}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </section>
//     </>
//   );
// }
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
// import { buttonVariants } from "@/components/ui/button"; // No longer needed in Home.tsx if buttons are in Navbar
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const features = [
    {
        title: "Comprehensive Courses",
        description: "Access a wide range of carefully curated courses designed by industry experts.",
        icon: "📚"
    },
    {
        title: "Interactive Learning",
        description: "Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
        icon: "🎮"
    },
    {
        title: "Progress Tracking",
        description: "Monitor your progress and achievements with detailed analytics and personalized dashboards.",
        icon: "📊"
    },
    {
        title: "Community Support",
        description: "Join a vibrant community of learners and instructors to collaborate and share knowledge.",
        icon: "👥"
    }
];
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            variant: "outline",
                            children: "The Future of Online Education"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold tracking-tight",
                            children: "Elevate your Learning Experience"
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/page.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-[700px] text-muted-foreground md:text-xl",
                            children: "Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere."
                        }, void 0, false, {
                            fileName: "[project]/app/(public)/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(public)/page.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(public)/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32",
                children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "hover:shadow-lg transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-4",
                                        children: feature.icon
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(public)/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(public)/page.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/app/(public)/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(public)/page.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/(public)/page.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(public)/page.tsx",
                lineNumber: 403,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
} // 
 // "use client";
 // import { Button } from "@/components/ui/button";
 // import { ThemeToggle } from "@/components/ui/themeToggle";
 // import { authClient } from "@/lib/auth-client";
 // import { useRouter } from "next/navigation";
 // import { toast } from "sonner";
 // export default function Home() {
 //   const router = useRouter();
 //   const { data: session } = authClient.useSession();
 //   async function signOut() {
 //     await authClient.signOut({
 //       fetchOptions: {
 //         onSuccess: () => {
 //           router.push("/");
 //           toast.success("Logged out successfully");
 //         },
 //       },
 //     });
 //   }
 //   return (
 //     <div className="flex min-h-screen flex-col items-center justify-center gap-4">
 //       <h1 className="text-3xl font-bold underline animate-pulse animate-spotlight bg-gradient-to-r bg-emerald-400 to-sky-700 from-emerald-500 bg-clip-text text-transparent">
 //         hello world
 //       </h1>
 //       <ThemeToggle />
 //       {session ? (
 //         <div>
 //           <p>{session.user.name}</p>
 //           <Button onClick={signOut}>Logout</Button>
 //         </div>
 //       ) : (
 //         <Button>Login</Button>
 //       )}
 //     </div>
 //   );
 // }
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_93114e1e._.js.map