import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    // Load Visme script only once
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex flex-col">
      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-2">Get in touch with the CryptoX team</p>
      </div>

      {/* Embedded Form */}
      <div className="flex-1 flex justify-center items-center px-4 pb-10">
        <div
          class="visme_d"
          data-title="Business Contact Form"
          data-url="nmn4yxj4-business-contact-form"
          data-domain="forms"
          data-full-page="false"
          data-min-height="500px"
          data-form-id="178226"
        ></div>
      </div>
    </div>
  );
}
