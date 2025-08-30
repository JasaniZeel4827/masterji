import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { chapterSchema, ChapterSchemaType } from "@/lib/zodSchemas";
import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createChapter } from "../actions";
import { tryCatch } from "@/hooks/try-catch";


export function NewChapterModel({ courseId }: { courseId: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const [isPending, startTransition] = useTransition()

    const form = useForm<ChapterSchemaType>({
        resolver: zodResolver(chapterSchema),
        defaultValues: {
            name: "",
            courseId: courseId,
        },
    });


    async function onSubmit(values: ChapterSchemaType) {
        console.log('Form submitted with values:', values);
        startTransition(async () => {
            try {
                console.log('Starting form submission');
                const { data: result, error } = await tryCatch(createChapter({ ...values, courseId }));
                console.log('Server response:', { result, error });

                if (error) {
                    console.error('Error in form submission:', error);
                    toast.error("An error occurred. Please try again later");
                    return;
                }

                if (result?.status === "success") {
                    toast.success("Chapter created successfully");
                    form.reset();
                    setIsOpen(false);
                } else if (result?.status === 'error') {
                    toast.error(result.message || "Failed to create chapter");
                }
            } catch (err) {
                console.error('Unexpected error in onSubmit:', err);
                toast.error("An unexpected error occurred");
            }
        });
    }

    // function handleOpenChange(open: boolean) {
    //     setIsOpen(open);
    // }
    function handleOpenChange(open: boolean) {

        if (!open) {
            form.reset();
        }
        setIsOpen(open);
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 flex items-center">
                    <Plus className="size-4" /> New Chapter
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <DialogHeader>
                            <DialogTitle>Create New Chapter</DialogTitle>
                            <DialogDescription>
                                What would you like to name your chapter?
                            </DialogDescription>
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Chapter Name"
                                            {...field}
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? 'Creating...' : 'Save Changes'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}