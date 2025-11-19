"use client";

import { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        message: "",
        type: "",
    });

    // VALIDATION FUNCTIONS
    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[6-9]\d{9}$/.test(phone); // Indian 10-digit mobile number
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validatePhone(formData.phone)) {
            return setStatus({
                loading: false,
                message: "Enter a valid 10-digit mobile number starting with 6–9.",
                type: "error",
            });
        }

        if (!validateEmail(formData.email)) {
            return setStatus({
                loading: false,
                message: "Enter a valid email address.",
                type: "error",
            });
        }

        setStatus({ loading: true, message: "", type: "" });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setStatus({
                loading: false,
                message: "Message sent successfully!",
                type: "success",
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error: any) {
            setStatus({
                loading: false,
                message: error.message || "Failed to send. Try again.",
                type: "error",
            });
        }
    };

    // 👇 FIXED: Hide status message 5 seconds AFTER message updates
    useEffect(() => {
        if (!status.message) return;

        const timer = setTimeout(() => {
            setStatus({ loading: false, message: "", type: "" });
        }, 5000);

        return () => clearTimeout(timer);
    }, [status.message]);

    return (
        <section id="contact" className="mt-2 w-full min-h-screen flex items-center">
            <div className="w-full flex flex-col md:flex-row justify-between items-start p-6 md:p-12">

                {/* Text Section */}
                <div className="md:w-1/2">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl mb-4 md:mb-6">
                        GET IN TOUCH
                        <svg width="40" height="4" viewBox="0 0 40 4" fill="currentColor">
                            <rect width="40" height="4" rx="2" />
                        </svg>
                    </h2>

                    <h1 className="text-4xl md:text-5xl font-sans leading-tight mb-5">
                        Contact Us today for a free IT business consultation
                    </h1>

                    <p className="text-lg md:text-xl mb-8">
                        We're happy to help and answer any questions related to your business needs.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-white p-4 rounded shadow-md">
                            <FaPhoneAlt className="text-blue-500 text-2xl" />
                            <div>
                                <span className="text-gray-600 font-medium">Call us at:</span>
                                <p className="text-gray-800 font-bold">(+91) 85## #### 32</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white p-4 rounded shadow-md">
                            <CgMail className="text-blue-500 text-2xl" />
                            <div>
                                <span className="text-gray-600 font-medium">Email:</span>
                                <p className="text-gray-800 font-bold">amarjit########@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto"
                    >
                        <h2 className="text-lg font-semibold mb-6">Please fill in the form below</h2>

                        {status.message && (
                            <div
                                className={`mb-4 p-3 rounded ${status.type === "success"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

                        {/* NAME */}
                        <div className="mb-4 relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full border rounded-full px-4 py-3 pl-10"
                            />
                            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* PHONE + EMAIL */}
                        <div className="flex gap-4 mb-4">
                            <div className="relative w-1/2">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    required
                                    maxLength={10}
                                    className="w-full border rounded-full px-4 py-3 pl-10"
                                />
                                <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            <div className="relative w-1/2">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                    className="w-full border rounded-full px-4 py-3 pl-10"
                                />
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-full px-4 py-3 mb-4"
                        >
                            <option value="">Select Subject</option>
                            <option value="consultation">Consultation</option>
                            <option value="website">Website Development</option>
                            <option value="support">Support</option>
                            <option value="other">Other</option>
                        </select>

                        {/* MESSAGE */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            required
                            className="w-full border rounded-xl px-4 py-3 mb-6 h-24"
                        />

                        <button
                            type="submit"
                            disabled={status.loading}
                            className={`w-full bg-blue-500 text-white py-3 rounded-full font-semibold ${status.loading ? "opacity-50" : "hover:bg-blue-600"
                                }`}
                        >
                            {status.loading ? "Sending..." : "Send Message →"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
