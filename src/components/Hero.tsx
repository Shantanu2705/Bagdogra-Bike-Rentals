"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/videos/bagdogra-bike-rental.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-zinc-950" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 block">
            Bagdogra • Siliguri • North Bengal
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[7rem] font-bebas text-white uppercase leading-[0.9] tracking-normal shadow-sm mb-6 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          RIDE YOUR WAY <br/> <span className="text-orange-500">THROUGH THE HILLS.</span>
        </motion.h1>

        <motion.p 
          className="text-zinc-200 text-lg md:text-2xl font-inter font-light max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Premium bikes for unforgettable rides across North Bengal and the Himalayas.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="#bikes" 
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg transition-colors flex items-center justify-center min-w-[200px]"
          >
            Explore Bikes
          </a>
          <a 
            href="tel:+917477393977" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg transition-colors flex items-center justify-center min-w-[200px]"
          >
            Call +91 7477393977
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </motion.div>
    </section>
  );
}
