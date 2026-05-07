import { motion } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "Institutional-Grade Analytics",
    desc: "Deep market intelligence with real-time liquidity and volume tracking across major exchanges.",
    icon: BarChart3,
  },
  {
    title: "Low-Latency Execution Layer",
    desc: "Optimized infrastructure designed for near-instant market data updates and execution signals.",
    icon: Zap,
  },
  {
    title: "Multi-Layer Security",
    desc: "Cold-wallet architecture with encrypted session handling and anomaly detection systems.",
    icon: ShieldCheck,
  },
  {
    title: "Global Market Coverage",
    desc: "Track assets across 100+ markets with unified pricing and aggregated liquidity feeds.",
    icon: Globe,
  },
  {
    title: "Risk Monitoring Engine",
    desc: "Automated exposure tracking and volatility alerts based on real-time market shifts.",
    icon: Activity,
  },
  {
    title: "End-to-End Encryption",
    desc: "All data streams secured with AES-256 encryption and hardened API gateways.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section className="bg-[#0B0F1A] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight">
            Built for Traders
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A performance-first trading infrastructure designed for speed,
            precision, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#111827]/60 border border-white/5 rounded-2xl p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                </div>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
