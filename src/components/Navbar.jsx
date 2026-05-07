import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-6 py-4 bg-[#0B0F1A]"
    >
      <h1 className="text-xl font-bold">CryptoX</h1>

      <div className="space-x-6 text-gray-300">
        <a href="#">Markets</a>
        <a href="#">Features</a>
        <a href="#">Docs</a>
      </div>
    </motion.nav>
  );
}
