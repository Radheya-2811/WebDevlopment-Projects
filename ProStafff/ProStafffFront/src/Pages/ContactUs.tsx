import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", topic: "", message: "" });
    } catch (err) {
      alert("Error sending message");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl w-[400px] space-y-4 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center">
          Contact <span className="text-yellow-400">ProStafff</span>
        </h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-700 outline-none"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
          className="w-full p-2 rounded bg-gray-700 outline-none"
          required
        />

        <input
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Topic (Hiring / Candidate Query)"
          className="w-full p-2 rounded bg-gray-700 outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 rounded bg-gray-700 outline-none h-28"
          required
        />

        <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
