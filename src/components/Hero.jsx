import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-[#0B0F1A]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">Trade Crypto Smarter</h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Real-time crypto analytics, live pricing, and modern trading insights
        </p>

        <button className="mt-8 px-6 py-3 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl hover:cursor-pointer">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
