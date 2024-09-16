"use client"; // For client-side functionality

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Define the validation schema using zod
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Define the form data type
type EmailFormData = z.infer<typeof emailSchema>;

const EmailForm = () => {
  const [submitted, setSubmitted] = useState(false);

  // Initialize useForm with zod schema validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  // Handle form submission
  const onSubmit = async (data: EmailFormData) => {
    console.log("Form submitted", data);
    try {
      // Here, you would send the data to your backend or email API
      await sendEmail(data); // Placeholder function for sending an email
      setSubmitted(true);
      reset(); // Reset form after submission
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  // Placeholder function for sending email
  const sendEmail = async (data: EmailFormData) => {
    // You can use any email service or API like SendGrid, Nodemailer, etc.
    console.log("Sending email:", data);
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-md rounded-lg">

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4    ">
          <input placeholder="Name"
            type="text"
            {...register("name")}
            className={`w-full p-2 border bg-transparent focus:shadow-[0px_0px_20px_rgba(239,68,68,0.5)]  border-red-500 focus:border-none outline-none  ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}

       
        </div>
<div className="mb-4">
<input placeholder="Email"
            type="email"
            {...register("email")}
            className={`w-full p-2 border bg-transparent focus:shadow-[0px_0px_20px_rgba(239,68,68,0.5)]  border-red-500 focus:border-none outline-none  ${
              errors.email ? "border-red-500 " : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
</div>
        {/* Email Field */}
        {/* <div className="mb-4"> */}
    
        {/* </div> */}

        {/* Subject Field */}
        <div className="mb-4">
          <input  placeholder="Subject"
            type="text"
            {...register("subject")}
            className={`w-full p-2 border bg-transparent focus:shadow-[0px_0px_20px_rgba(239,68,68,0.5)]  border-red-500 focus:border-none outline-none  ${
              errors.subject ? "border-red-500 " : "border-gray-300"
            } rounded`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <textarea placeholder="Message"
            {...register("message")}
            className={`w-full p-2 border bg-transparent focus:shadow-[0px_0px_20px_rgba(239,68,68,0.5)] border-red-500 focus:border-none outline-none  ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded h-32`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        {submitted && <p className="text-red-500 text-3xl font-semibold my-4">Email sent successfully!</p>}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-red-500 text-white font-semibold rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
