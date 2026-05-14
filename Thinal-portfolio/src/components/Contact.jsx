import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const ContactInfoCard = ({ icon, title, value, href, delay }) => (
  <motion.a
    variants={fadeIn("right", "spring", delay, 0.75)}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 group"
  >
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
      <i className={`${icon} text-white text-lg`}></i>
    </div>
    <div>
      <p className="text-white/40 text-[10px] uppercase tracking-[2px] font-bold mb-0.5">{title}</p>
      <p className="text-white font-medium text-sm">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        "service_6jsn6wa",
        "template_pdd5pys",
        {
          from_name: form.name,
          to_name: "Thinal",
          from_email: form.email,
          to_email: "thinaldewnayana@gmail.com",
          message: form.message,
        },
        "Y8SN1WC6c9i3XfaLT",
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Left Side: Info */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-1 flex flex-col justify-between py-8"
        >
          <div>
            <p className={styles.sectionSubText}>Available for new projects</p>
            <h2 className={styles.sectionHeadText}>Let's <span className="orange-gradient-text">Connect</span></h2>
            <p className="text-secondary mt-6 max-w-lg leading-relaxed text-lg">
              Have a vision in mind? I help brands and individuals bring their ideas to life through modern, high-performance digital solutions.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 max-w-sm">
            <ContactInfoCard
              icon="fa-solid fa-envelope"
              title="Direct Email"
              value="thinaldewnayana@gmail.com"
              href="mailto:thinaldewnayana@gmail.com"
              delay={0.4}
            />
            <ContactInfoCard
              icon="fa-brands fa-linkedin"
              title="Professional"
              value="linkedin.com/in/thinal"
              href="https://www.linkedin.com/in/thinal-dewnayana-9b862328b"
              delay={0.6}
            />
            <ContactInfoCard
              icon="fa-solid fa-location-dot"
              title="Current Base"
              value="Colombo, Sri Lanka"
              href="https://maps.google.com/?q=Colombo,Sri+Lanka"
              delay={0.8}
            />
          </div>

          <div className="mt-16 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/20" />
              <p className="text-white/30 text-xs uppercase tracking-[4px]">Follow my journey</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 bg-[#050505]/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 font-medium text-xs uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleOnChange}
                  placeholder="Thinal Dewnayana"
                  className="form-input bg-white/5 border-white/10"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white/60 font-medium text-xs uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleOnChange}
                  placeholder="thinal@gmail.com"
                  className="form-input bg-white/5 border-white/10"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white/60 font-medium text-xs uppercase tracking-widest ml-1">Your Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleOnChange}
                placeholder="What project do you have in mind?"
                className="form-input bg-white/5 border-white/10 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-px font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,123,69,0.4)]"
            >
              <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-[#0a0a0a] px-12 py-5 transition-all duration-300 group-hover:bg-transparent">
                <span className="tracking-widest uppercase text-sm">
                  {loading ? "Sending Transmission..." : "Initialize Contact"}
                </span>
                {!loading && <i className="fa-solid fa-paper-plane text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </div>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
