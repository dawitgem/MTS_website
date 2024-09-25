"use client"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/lib/sendEmail';

// Define Zod validation schema
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    email: z.string().email('Invalid email address'),
    subject: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
});

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });
    const { toast } = useToast()

    const onSubmit = async (data: any) => {
        console.log('Form Data:', data);
        try {
            const response = await sendEmail(data)
            console.log(response)
            toast({
                title: response?.success,
                variant: "success",

            })
            reset(); // Reset form after successful submission
        } catch (error: any) {
            toast({
                title: error.error,
                description: "something went wrong, please try again!!",
                variant: "destructive"
            })
            throw error

        }

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:flex-1 flex flex-col gap-10 p-4 bg-slate-50 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-gray-600 break-words">Leave a Message</h1>

                <div className="flex flex-col lg:flex-row gap-10 w-full">
                    {/* Name Field */}
                    <div className="flex flex-col gap-5 w-full">
                        <Input
                            type="text"
                            {...register('name')}
                            placeholder="Your Name"
                            className={`hover:border hover:border-primary active:border-primary md:placeholder:text-gray-600 ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col gap-5 w-full">
                        <Input
                            type="text"
                            {...register('phone')}
                            placeholder="Your Phone"
                            className={`hover:border hover:border-primary active:border-primary md:placeholder:text-gray-600 ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && <p className="text-red-500">{errors.phone.message as string}</p>}
                    </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-5 w-full">
                    <Input
                        type="text"
                        {...register('email')}
                        placeholder="Your Email"
                        className={`hover:border hover:border-primary active:border-primary md:placeholder:text-gray-600 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
                </div>

                {/* Subject Field */}
                <div className="flex flex-col gap-5 w-full">
                    <Input
                        type="text"
                        {...register('subject')}
                        placeholder="Subject"
                        className={`hover:border hover:border-primary active:border-primary md:placeholder:text-gray-600`}
                    />
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-5 w-full">
                    <Textarea
                        {...register('message')}
                        cols={10}
                        rows={10}
                        placeholder="Your message"
                        className={`placeholder:text-gray-500 hover:border hover:border-primary focus:border-primary ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message as string}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="bg-primary text-white font-bold w-1/4 self-center">
                    {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
            </form>
        </>
    );
}
