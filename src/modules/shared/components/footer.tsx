"use client";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Nuestra Organización</h2>
        <p className="mb-6">Transformando el futuro desde 2015</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-primary transition-colors">
            <span className="sr-only">Facebook</span>
            <FacebookRounded className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
