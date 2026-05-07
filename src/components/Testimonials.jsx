import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The latency difference compared to our previous dashboard is significant. Data consistency across exchanges is reliable.",
    role: "Quant Analyst",
    org: "Hedge Fund Desk (EU)",
  },
  {
    quote:
      "Clean architecture, stable API integration, and real-time responsiveness make it suitable for production trading systems.",
    role: "Lead Engineer",
    org: "FinTech Infrastructure Team",
  },
  {
    quote:
      "We use this as a secondary validation layer for crypto exposure monitoring across portfolios.",
    role: "Risk Manager",
    org: "Digital Asset Desk",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0B0F1A] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Trusted in Real Trading Environments
          </h2>
          <p className="text-gray-400 mt-3">
            Used by analysts and infrastructure teams handling live market
            systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#111827]/60 border border-white/5 rounded-2xl p-6"
            >
              <p className="text-gray-300 leading-relaxed">{t.quote}</p>

              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-white font-medium text-sm">{t.role}</p>
                <p className="text-gray-500 text-xs">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
