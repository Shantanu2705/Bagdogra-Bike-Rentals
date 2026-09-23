"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Map, MapPin, Compass } from 'lucide-react';

const benefits = [
  {
    title: 'WELL-MAINTAINED BIKES',
    description: 'Reliable motorcycles meticulously prepared and serviced for your journey.',
    icon: Wrench
  },
  {
    title: 'FLEXIBLE RENTALS',
    description: 'Choose a bike and duration that perfectly fits your route and travel plans.',
    icon: Map
  },
  {
    title: 'LOCAL KNOWLEDGE',
    description: 'Based in Bagdogra, making it the most convenient starting point for North Bengal.',
    icon: MapPin
  },
  {
    title: 'ADVENTURE READY',
    description: 'From city roads to high-altitude mountain routes, choose a ride built for the journey.',
    icon: Compass
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden">
      {/* Background aesthetic */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bebas text-zinc-900 uppercase mb-4">
            WHY RIDE WITH US?
          </h2>
          <div className="w-16 h-1 bg-orange-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                <benefit.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bebas tracking-wide text-zinc-900 mb-3 uppercase">
                {benefit.title}
              </h3>
              <p className="text-zinc-600 font-inter text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
