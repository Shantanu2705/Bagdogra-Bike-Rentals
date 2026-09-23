"use client";

import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Brand */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center mb-6 hover:scale-105 transition-transform origin-left">
              <Logo className="scale-150 ml-4" />
            </a>
            <p className="text-zinc-500 text-sm max-w-xs font-light">
              Premium bikes for unforgettable rides across North Bengal and the Himalayas.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h4 className="text-white font-bebas tracking-wider text-xl uppercase mb-4">Contact</h4>
            <address className="not-italic text-zinc-400 text-sm flex flex-col gap-2">
              <p>Bhuttabari, Bagdogra,</p>
              <p>Siliguri, West Bengal</p>
              <p className="mt-2 text-white font-semibold flex items-center gap-2">
                <span className="text-orange-500">P:</span> +91 7477393977
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h4 className="text-white font-bebas tracking-wider text-xl uppercase mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm w-fit">Home</a>
              <a href="#bikes" className="text-zinc-400 hover:text-white transition-colors text-sm w-fit">Bikes</a>
              <a href="#why-us" className="text-zinc-400 hover:text-white transition-colors text-sm w-fit">Why Us</a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm w-fit">Contact</a>
            </div>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 Bagdogra Bike Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
