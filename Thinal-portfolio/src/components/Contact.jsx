import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const ContactInfoCard = ({ icon, title, value, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="glass-card p-6 flex items-center gap-6 group hover:border-orange-500/50 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
       <i className={`${icon} text-xl text-orange-500`}></i>
    </div>
    <div>
      <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{title}</p>
      <p className="text-white font-medium text-sm md:text-base">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_kgkf867",
        "template_rhu7qkm",
        {
          from_name: form.name,
          to_name: "Thinal",
          from_email: form.email,
          to_email: "thinaldewnayana@gmail.com",
          message: form.message,
        },
        "Y8SN1WC6c9i3XfaLT",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        },
      );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact-form-container"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact <span className="orange-gradient-text">Me</span></h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-white font-medium text-sm ml-1">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleOnChange}
              placeholder="Thinal Dilmith"
              className="form-input"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-medium text-sm ml-1">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
              placeholder="thinal@example.com"
              className="form-input"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-medium text-sm ml-1">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleOnChange}
              placeholder="What would you like to say?"
              className="form-input resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary mt-4 w-full md:w-fit px-12 py-4 flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-col gap-6 justify-center"
      >
        <div className="mb-8">
           <h4 className="text-white text-2xl font-bold mb-4">Let's build something amazing together</h4>
           <p className="text-secondary leading-relaxed">
             I'm currently available for freelance work and full-time opportunities. 
             If you have a project that needs a professional touch, feel free to reach out.
           </p>
        </div>

        <div className="flex flex-col gap-4">
           <ContactInfoCard 
             icon="fa-solid fa-envelope"
             title="Email Me"
             value="thinaldewnayana@gmail.com"
             href="mailto:thinaldewnayana@gmail.com"
           />
           <ContactInfoCard 
             icon="fa-solid fa-location-dot"
             title="Location"
             value="Colombo, Sri Lanka"
             href="https://maps.google.com/?q=Colombo,Sri+Lanka"
           />
           <ContactInfoCard 
             icon="fa-brands fa-linkedin"
             title="LinkedIn"
             value="in/thinal-dewnayana"
             href="https://www.linkedin.com/in/thinal-dewnayana-9b862328b"
           />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
