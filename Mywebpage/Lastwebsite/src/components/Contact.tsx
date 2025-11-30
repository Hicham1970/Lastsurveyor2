import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Pour afficher les messages de succès ou d'erreur

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", { // <-- C'est le bon endpoint pour Vercel
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("Error: Could not send message.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mt-4 text-lg text-center text-gray-500 dark:text-gray-400">
          Have a question or a project in mind? Fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
                placeholder="Your Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              placeholder="Your Message"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </div>
          {status && <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">{status}</p>}
        </form>
      </div>
    </div>
  );
}