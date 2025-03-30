import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        if (!formRef.current) return;

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    setMessage("Message sent successfully!");
                    formRef.current?.reset();
                },
                (error) => {
                    setMessage("Failed to send message. Try again later.");
                    console.error("EmailJS Error:", error);
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <div className="p-2 flex flex-col md:px-0 md:w-1/2">
            <h1 className="text-xl text-center font-semibold md:text-3xl md:font-bold md:mt-1">
                Send me a message
            </h1>
            {message && <p className="text-center mt-2">{message}</p>}
            <form ref={formRef} onSubmit={submitForm} className="w-full px-3 md:px-10 md:py-2 md:mt-8">
                <div className="flex flex-col gap-2 md:mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ex. example@example.com"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="ex. John Doe"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={2}
                        placeholder="ex. Nice"
                        className="bg-transparent border rounded-lg px-3 py-2 backdrop-blur-lg"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-3 py-2 border bg-transparent rounded-lg w-full hover:bg-accent/20"
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
