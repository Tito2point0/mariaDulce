import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

// Define an interface for your form data.
interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // Optional: allow additional keys if needed
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  // Handle changes for input and textarea elements.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate the form fields.
  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission with EmailJS.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Get credentials from environment variables using import.meta.env
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
        // Debugging logs
        console.log("VITE_EMAILJS_SERVICE_ID:", SERVICE_ID);
        console.log("VITE_EMAILJS_TEMPLATE_ID:", TEMPLATE_ID);
        console.log("VITE_EMAILJS_PUBLIC_KEY:", PUBLIC_KEY);
  
        // Ensure variables are not undefined
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
          console.error("Missing EmailJS environment variables!");
          return;
        }
  
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          form,
          PUBLIC_KEY
        );
  
        if (response.status === 200) {
          console.log("Email sent successfully!", response);
          setSubmitted(true);
        } else {
          console.error("Email failed to send:", response);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className="min-h-screen bg-neutral-50 py-24 px-6 flex flex-col justify-center items-center">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-neutral-900">
          Contact Us
        </h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600">
              Thank you for reaching out! We will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-neutral-700 mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-neutral-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-neutral-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-neutral-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold px-4 py-2 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
