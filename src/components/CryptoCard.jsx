import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function CryptoCard({ coin }) {
  const isUp = coin.price_change_percentage_24h >= 0;

  const sparkData =
    coin.sparkline_in_7d?.price?.map((price, index) => {
      const now = Date.now();
      const totalPoints = coin.sparkline_in_7d.price.length;

      const interval = (7 * 24 * 60 * 60 * 1000) / totalPoints;

      return {
        time: now - (totalPoints - index) * interval,
        price,
      };
    }) || [];

  const high24h = coin.high_24h;
  const low24h = coin.low_24h;
  const current = coin.current_price;

  const rangePosition = ((current - low24h) / (high24h - low24h)) * 100;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-[#0F172A]/80 border border-white/5 rounded-2xl p-5"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={coin.image} className="w-9 h-9" />
          <div>
            <h3 className="font-semibold capitalize">{coin.id}</h3>
            <p className="text-xs text-gray-500 uppercase">{coin.symbol}</p>
          </div>
        </div>

        <span className="text-xs text-gray-400">#{coin.market_cap_rank}</span>
      </div>

      {/* PRICE */}
      <div className="mt-4">
        <p className="text-2xl font-bold">${current.toLocaleString()}</p>

        <p className={`text-sm ${isUp ? "text-green-400" : "text-red-400"}`}>
          {isUp ? "▲" : "▼"} {coin.price_change_percentage_24h.toFixed(2)}%
          (24h)
        </p>
      </div>
      <div className="mt-4 text-xs text-gray-400">
        <div className="flex justify-between">
          <span>24h Low: ${low24h.toLocaleString()}</span>
          <span>24h High: ${high24h.toLocaleString()}</span>
        </div>
      </div>
      <div className="h-32 mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparkData}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={isUp ? "#22c55e" : "#ef4444"}
                  stopOpacity={0.4}
                />
                <stop offset="95%" stopColor="#0B0F1A" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="time" hide />
            <YAxis hide domain={["auto", "auto"]} />
            <Tooltip
              contentStyle={{
                background: "#0B0F1A",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "12px",
              }}
              labelFormatter={(time) =>
                new Date(time).toLocaleString(undefined, {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }
              formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
            />

            <Area
              type="monotone"
              dataKey="price"
              stroke={isUp ? "#22c55e" : "#ef4444"}
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
