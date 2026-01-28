import { useState } from "react";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

const ContactUs = () => {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT FORM CARD */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <p className="text-orange-500 font-semibold mb-2">Get in Touch</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let’s Chat, Reach Out to Us
          </h1>
          <p className="text-gray-500 mb-6">
            Have questions or feedback? We’re here to help. Send us a message,
            and we’ll respond within 24 hours.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="First Name"
                className="border p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Last Name"
                className="border p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Mobile Number */}
            <input
              name="mobile"
              type="tel"
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Leave us a message"
              className="border p-3 rounded-lg w-full h-32 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              <span>I agree to the privacy policy</span>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE SECTION */}
        <div className="space-y-6">


          {/* EMAIL CARD */}
          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-blue-600 text-2xl">📧</span>
            <div>
              <p className="font-semibold text-lg">Email</p>
              <p className="text-gray-500">support@prostafff.com</p>
            </div>
          </div>

          {/* PHONE CARD */}
          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-blue-600 text-2xl">📞</span>
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <p className="text-gray-500">
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>

          {/* LINKEDIN CARD */}
          <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <span className="text-blue-600 text-2xl">🔗</span>
            <div>
              <p className="font-semibold text-lg">LinkedIn</p>
              <a
                href="https://www.linkedin.com/company/prostafff"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/company/prostafff
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
