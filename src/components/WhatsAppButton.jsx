import React from "react";

const WhatsAppButton = () => {
  const phone = "1234567890";
  const message = encodeURIComponent("Hello, I'd like to know more about Euforia Delights!");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
