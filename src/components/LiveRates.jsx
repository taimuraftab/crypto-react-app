import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import { fetchCryptoMarkets } from "../api/cryptoApi";

export default function LiveRates() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const res = await fetchCryptoMarkets();
      setData(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Live Crypto Rates
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </section>
  );
}
