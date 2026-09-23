"use client";

import React from 'react';
import { Bike } from '@/data/bikes';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BikeCardProps {
  bike: Bike;
  onBook: (bike: Bike) => void;
}

export default function BikeCard({ bike, onBook }: BikeCardProps) {
  return (
    <motion.div 
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-900/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {bike.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="font-bebas text-3xl text-white tracking-wide mb-2 uppercase">
          {bike.name}
        </h3>
        
        <div className="flex items-end gap-1 mt-auto mb-6">
          <span className="text-2xl font-bold text-orange-500">₹{bike.price}</span>
          <span className="text-sm text-zinc-400 font-medium mb-1">/ day</span>
        </div>

        <button 
          onClick={() => onBook(bike)}
          className="w-full py-3 border border-zinc-700 text-white font-semibold transition-all duration-300 hover:bg-orange-600 hover:border-orange-600 hover:shadow-lg group-hover:border-orange-500/30"
        >
          BOOK THIS BIKE
        </button>
      </div>
    </motion.div>
  );
}
