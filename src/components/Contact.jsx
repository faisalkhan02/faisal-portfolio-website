import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8h8njws",
        "template_umfwsq1",
        form.current,
        "abnzQ8UT_4ArGbfIj"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;