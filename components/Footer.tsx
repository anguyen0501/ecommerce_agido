import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">My Next.js App</h2>
            <p className="text-sm">
              © {new Date().getFullYear()} My Next.js App. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-400">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
