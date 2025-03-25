"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandX,
  IconMail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      
      await addDoc(collection(db, "contact_submissions"), {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        timestamp: new Date(),
      });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.'
      });
      
    
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black my-8 sm:my-12">
      <h2 className="text-2xl sm:text-3xl text-center justify-center font-bold text-neutral-800 dark:text-neutral-200">
        Contact Us
      </h2>
      <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
        Tell us about your project and let&apos;s create something extraordinary.
      </p>

      {submitStatus.type && (
        <div className={`mt-4 p-3 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              placeholder="Your name"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] min-h-[100px] resize-none"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a href="https://x.com/pentastudio" target="_blank" rel="noopener noreferrer">
            <button className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
              <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                Twitter
              </span>
            </button>
          </a>
          <a href="mailto:studiopentait@gmail.com" target="_blank" rel="noopener noreferrer">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Email
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href="https://www.linkedin.com/company/studio-penta/" target="_blank" rel="noopener noreferrer">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                LinkedIn
              </span>
              <BottomGradient />
            </button>
          </a>
          <a href="https://wa.link/k5c8b4" target="_blank" rel="noopener noreferrer">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                WhatsApp
              </span>
              <BottomGradient />
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
