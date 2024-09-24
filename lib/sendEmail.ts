"use server"
import nodemailer from 'nodemailer';


export const sendEmail = async (formData: any) => {

    const { name, email, subject, message } = formData;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASS,
        },
    });

    try {
        // Sending email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'dawitgem@gmail.com', // Replace with your email
            subject: subject || 'No Subject',
            text: message,
            html: `<p>${message}</p>`,
        });

        return { success: 'Email sent successfully!' };
    } catch (error) {
        return { error: 'Failed to send email' };
    }
};
