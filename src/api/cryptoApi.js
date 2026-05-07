export const fetchCryptoMarkets = async () => {
  const ids = ["bitcoin", "ethereum", "solana", "litecoin"];

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(
      ",",
    )}&order=market_cap_desc&sparkline=true&price_change_percentage=24h`,
  );

  if (!res.ok) throw new Error("Failed to fetch crypto data");

  return await res.json();
};
