import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src="/logo-sm.svg"
          alt="MiuBitz Monogram"
          width={18}
          height={18}
          className="footer-logo"
        />
        <span>© {currentYear} MiuBitz</span>
      </div>
      <span className="footer-text">Small tools. Built to be useful.</span>
    </footer>
  );
}
