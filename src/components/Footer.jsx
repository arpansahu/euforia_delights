import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white text-center p-4 mt-8">
      <p>© {new Date().getFullYear()} Euforia Delights. All rights reserved.</p>
      <p className="mt-1">450 W 31st Street, New York, NY</p>
      <p>Phone: +1 (987) 200-2500</p>
      <p className="mt-1">
        <a href="mailto:euforia@delights.com" className="underline">
          euforia@delights.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
