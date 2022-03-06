import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center shadow-2xl p-4 text-neutral-content bg-gray-700">
        <div className="font-bold">
            <p className="font-bold inline ">
               Copyright {year} &copy; All rights reserved.
            </p>
        </div>
    </footer>
  )
}
export default Footer;
