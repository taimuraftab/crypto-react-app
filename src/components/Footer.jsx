export default function Footer() {
  return (
    <footer className="bg-black text-center text-gray-500 py-10">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>

      <p>© {new Date().getFullYear()} CryptoX</p>
    </footer>
  );
}
