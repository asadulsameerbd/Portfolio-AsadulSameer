import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-[#9D6AE1]/30 py-5">
      <footer className="footer py-5 sm:footer-horizontal footer-center bg-[#060010] text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Asadul Sameer
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
