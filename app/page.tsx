"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

const projects = [
  {
    title: "ShriA Chatbot 🤖",
    desc: "Automated customer journeys across WhatsApp & web",
    impact: "70%+ automation 🚀"
  },
  {
    title: "Voicebot 🌐",
    desc: "Multilingual CX in 9 Indian languages",
    impact: "Improved accessibility"
  },
  {
    title: "WhatsApp Engine 📲",
    desc: "Tier 3 engagement & campaigns",
    impact: "Higher conversion"
  },
  {
    title: "Microsites ⚙️",
    desc: "OTP-based self-service flows",
    impact: "Reduced TAT"
  }
];

export default function Home() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <div className="fixed w-full top-0 backdrop-blur-md bg-black/30 z-50 px-8 py-4 flex justify-between">
        <div className="font-semibold">Sai Teja</div>
        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-5xl font-bold"
        >
          Hi, I'm Sai Teja 👋
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-4 text-xl text-gray-300"
        >
          Building CX systems at the intersection of AI, operations, and distribution ⚙️
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition">
            View Work 🚀
          </button>
          <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Contact 🤝
          </button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-24 max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-semibold mb-6"
        >
          About Me 🧠
        </motion.h2>

        <motion.p
          custom={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-gray-300 leading-7"
        >
          I work at the intersection of technology, customer experience, and
          operations. My focus is on building systems that don't just work in
          theory but hold up in real-world conditions.
          <br /><br />
          My journey has been non-linear, shaped by solving problems across
          different teams and systems.
          <br /><br />
          Over time, I've moved from building features to understanding systems
          and now aligning moving parts to drive outcomes.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section id="work" className="px-8 py-24 max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-semibold mb-12"
        >
          Selected Work 🧩
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="p-6 border border-gray-800 rounded-2xl hover:border-gray-500 transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <p className="mt-4 text-sm text-blue-400">{p.impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-8 py-24 max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-semibold mb-12"
        >
          Skills 🛠️
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h4 className="text-white font-semibold mb-2">CX</h4>
            <p>Journey Mapping, Service Design</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Automation</h4>
            <p>Chatbots, Voicebots, APIs</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Growth</h4>
            <p>WhatsApp, SMS, Funnel Optimization</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-24 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-semibold"
        >
          Let's Build Something Meaningful 🤝
        </motion.h2>

        <motion.p
          custom={1}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-gray-400 mt-4"
        >
          Open to CX, AI, and product roles.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/saitejabhagyam"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            LinkedIn 🔗
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        Built with intent, not templates ✨
      </footer>
    </div>
  );
}
