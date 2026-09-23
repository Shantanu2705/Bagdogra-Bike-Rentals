"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AdventureSection() {
  return (
    <section className="relative py-32 bg-zinc-900 overflow-hidden">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542385262-cdf06b52a8ee?auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              The Himalayan Routes
            </span>
            <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase leading-[0.9] mb-6">
              YOUR JOURNEY <br/>
              <span className="text-zinc-500">STARTS HERE</span>
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed">
              From the bustling streets of Siliguri to the serene altitudes of Darjeeling, Kalimpong, and Sikkim. Bagdogra is the gateway to the Dooars and the North Bengal mountains.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {['Darjeeling', 'Kalimpong', 'Sikkim', 'Dooars', 'North Bengal'].map((place) => (
                <span key={place} className="px-4 py-2 border border-zinc-800 text-zinc-400 text-sm tracking-wider uppercase font-semibold">
                  {place}
                </span>
              ))}
            </div>

            <a 
              href="#bikes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-orange-600 hover:text-white transition-colors font-semibold uppercase tracking-wider text-sm"
            >
              Choose Your Ride
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
