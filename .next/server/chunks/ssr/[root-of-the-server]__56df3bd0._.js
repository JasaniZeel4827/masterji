module.exports = {

"[project]/.next-internal/server/app/(auth)/verify-request/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(auth)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(auth)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(auth)/verify-request/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
// import { authClient } from "@/lib/auth-client";
// import { Loader2 } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useState, useTransition } from "react";
// import { toast } from "sonner";
// export default function VerifyRequest() {
//     const router = useRouter()
//     const [otp, setOtp] = useState("");
//     const [emailPending, startTransition] = useTransition();
//     const params = useSearchParams()
//     const email = params.get('email') as string
//     const isOtpCompleted = otp.length === 6;
//     function verifyOtp() {
//         startTransition(async () => {
//             await authClient.signIn.emailOtp({
//                 email: email,
//                 otp: otp,
//                 fetchOptions: {
//                     onSuccess: () => {
//                         toast.success('Email verified')
//                         router.push("/")
//                     },
//                     onError: () => {
//                         toast.error("error verifying Email/OTP")
//                     }
//                 }
//             })
//         })
//     }
//     return (
//         <Card className="w-full mx-auto bg-neutral-900 text-white p-6 rounded-xl">
//             <CardHeader className="text-center space-y-2">
//                 <CardTitle className="text-xl font-semibold">Please check your email</CardTitle>
//                 <CardDescription className="text-gray-400">
//                     We have sent a verification email code to your email address:
//                     <br />
//                     <span className="font-medium text-white">{email}</span>
//                     <br />
//                     Please open the email and paste the code below.
//                 </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//                 <div className="flex flex-col items-center space-y-4">
//                     <InputOTP
//                         value={otp}
//                         onChange={(value) => setOtp(value)}
//                         maxLength={6}
//                         className="gap-3"
//                     >
//                         <InputOTPGroup>
//                             <InputOTPSlot index={0} />
//                             <InputOTPSlot index={1} />
//                             <InputOTPSlot index={2} />
//                             <InputOTPSlot index={3} />
//                             <InputOTPSlot index={4} />
//                             <InputOTPSlot index={5} />
//                         </InputOTPGroup>
//                     </InputOTP>
//                     <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your email</p>
//                 </div>
//                 <Button
//                     onClick={verifyOtp}
//                     disabled={emailPending || !isOtpCompleted}
//                     className="w-full">
//                     {emailPending ? (
//                         <>
//                             <Loader2 className="size-4 animate-spin" />
//                             <span>Loading...</span>
//                         </>
//                     ) : (
//                         "verify Account"
//                     )}
//                     {/* Verify Account */}
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// }
}}),
"[project]/app/(auth)/verify-request/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(auth)/verify-request/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__56df3bd0._.js.map