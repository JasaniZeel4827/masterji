import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { z } from "zod";
import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createLesson } from "../actions";
import { tryCatch } from "@/hooks/try-catch";

export function NewLessonModel({ courseId, chapterId }: { 
    courseId: string;
    chapterId: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(z.object({
            name: z.string().min(1, "Name is required"),
            courseId: z.string(),
            chapterId: z.string(),
        })),
        defaultValues: {
            name: "",
            courseId: courseId,
            chapterId: chapterId,
        },
    });

    const onSubmit = async (values: { name: string; courseId: string; chapterId: string }) => {
        try {
            startTransition(async () => {
                const { data: result, error } = await tryCatch(createLesson({ 
                    name: values.name,
                    courseId: values.courseId,
                    chapterId: values.chapterId
                }));
                
                if (error) {
                    toast.error(error.message);
                    return;
                }

                if (result?.status === "success") {
                    toast.success("Lesson created successfully");
                    form.reset({
                        name: "",
                        courseId: courseId,
                        chapterId: chapterId
                    });
                    setIsOpen(false);
                } else if (result?.status === 'error') {
                    toast.error(result.message || "Failed to create lesson");
                }
            });
        } catch (err) {
            console.error('Error:', err);
            toast.error("An unexpected error occurred");
        }
    };

    function handleOpenChange(open: boolean) {

        if(!open) {
            form.reset();
        }
        setIsOpen(open);
    } 

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full justify-center gap-2">
                    <Plus className="size-4" /> New Lesson
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <DialogHeader>
                            <DialogTitle>Create New Lesson</DialogTitle>
                            <DialogDescription>
                                What would you like to name your Lesson?
                            </DialogDescription>
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lesson Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Enter lesson name"
                                            disabled={isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button 
                                type="submit" 
                                disabled={isPending}
                                className="w-full"
                            >
                                {isPending ? 'Creating...' : 'Create Lesson'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}