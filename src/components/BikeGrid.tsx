"use client";

import React, { useState } from 'react';
import { bikes, Bike } from '@/data/bikes';
import BikeCard from './BikeCard';
import BookingModal from './BookingModal';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Adventure', 'Motorcycle', 'Scooter'];

export default function BikeGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  const filteredBikes = activeCategory === 'All' 
    ? bikes 
    : bikes.filter(bike => bike.category === activeCategory);

  return (
    <section id="bikes" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-bebas text-zinc-900 uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CHOOSE YOUR RIDE
          </motion.h2>
          <motion.p 
            className="text-zinc-600 text-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From Himalayan adventures to effortless city rides, find the bike that fits your journey.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40' 
                  : 'bg-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBikes.map((bike) => (
              <BikeCard 
                key={bike.id} 
                bike={bike} 
                onBook={setSelectedBike}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <BookingModal 
        isOpen={!!selectedBike} 
        onClose={() => setSelectedBike(null)} 
        bike={selectedBike} 
      />
    </section>
  );
}
