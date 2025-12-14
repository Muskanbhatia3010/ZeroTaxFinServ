import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";




export default function Contact() {
    const [status, setStatus] = useState("idle");
    // idle | loading | success | error
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("loading");

  // DEV MODE: skip sending email
  if (import.meta.env.VITE_ENABLE_EMAIL !== "true") {
    console.log("DEV MODE — form data:", formData);

    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 800);

    return;
  }

  // PROD MODE: send real email
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch(() => {
      setStatus("error");
    });
};




  const handleChange = (e) => {
    setStatus("idle");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="mb-6 text-[#042A2B]">
              Let's Work Together to Meet Your Needs
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help. Fill out the form below and we'll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#7C90821A]">
                <Mail className="w-6 h-6 text-[#7C9082]" />
              </div>
              <h3 className="mb-2 text-[#042A2B]">Email</h3>
              <p className="text-gray-600">info@taxpro.com</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#7C90821A]">
                <Phone className="w-6 h-6 text-[#7C9082]" />
              </div>
              <h3 className="mb-2 text-[#042A2B]">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#7C90821A]">
                <MapPin className="w-6 h-6 text-[#7C9082]" />
              </div>
              <h3 className="mb-2 text-[#042A2B]">Address</h3>
              <p className="text-gray-600">123 Main St, Suite 100</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-gray-700">First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Enquiry Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7C9082] focus:outline-none resize-none"
              />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3 rounded-lg text-white transition
                    ${
                    status === "loading"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#042A2B] hover:bg-[#7C9082]"
                    }
                `}
                >
                {status === "loading" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
                <div className="mt-4 rounded-lg bg-green-50 text-green-700 px-4 py-3 text-center">
                    Thank you for reaching out. We’ve received your message and will get back to you shortly.
                </div>
                )}

                {status === "error" && (
                <div className="mt-4 rounded-lg bg-red-50 text-red-700 px-4 py-3 text-center">
                    Something went wrong while sending your message. Please try again.
                </div>
                )}


          </form>
        </div>
      </section>
    </div>
  );
}
