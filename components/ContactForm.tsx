"use client";

import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("✅ Email sent:", result.text);
      alert("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Failed:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#0A192F] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-[#0B1E34] rounded-lg shadow-md p-6 border border-[#132F4C] text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ✨ Contact and <span className="text-[#38BDF8]">Get in Touch</span>
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full p-2 bg-[#0F263F] border border-[#1E3A5C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-all"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full p-2 bg-[#0F263F] border border-[#1E3A5C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-2 bg-[#0F263F] border border-[#1E3A5C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-all"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={4}
              required
              className="w-full p-2 bg-[#0F263F] border border-[#1E3A5C] rounded-md focus:outline-none focus:ring-1 focus:ring-[#38BDF8] transition-all"
            />
          </div>

          <div className="pt-3 flex justify-center">
            <MagicButton
              type="submit"
              disabled={loading}
              title={loading ? "Sending..." : "Send Message"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
