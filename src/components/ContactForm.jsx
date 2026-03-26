import React, { useState } from "react";
import { Send } from 'lucide-react'
import { cn } from './lib/utils'
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToastId = toast.loading("Sending your message...");

    try {
      await emailjs.sendForm(
        "service_kw7fufm",
        "template_5kowm18",
        e.target,
        "XSFMmmEvovuM1DdPR"
      );

      toast.success("Message sent successfully!", {
        id: loadingToastId,
      });

      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message.", {
        id: loadingToastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div >
      <Toaster position="top-right" />

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
          <input type="text" id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Enter Your Name'/>
        </div>

        <div>
          <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Email</label>
          <input type="email" id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Enter Your Email'/>
        </div>

        <div>
          <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Message</label>
          <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Enter Your Message'/>
        </div>
        
        <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer", isSubmitting && "cursor-not-allowed opacity-70")}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send  size={16}/>
        </button>
      </form>
    </div>
  )
}

export default ContactForm