"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'CHOOSE YOUR BIKE',
    description: 'Explore our fleet of premium motorcycles and scooters to find the perfect match for your journey.'
  },
  {
    number: '02',
    title: 'CONTACT & BOOK',
    description: 'Call us directly or submit your rental request via WhatsApp to confirm availability and lock in your dates.'
  },
  {
    number: '03',
    title: 'START YOUR RIDE',
    description: 'Pick up your prepared bike from our Bagdogra location and begin your North Bengal adventure.'
  }
];

export default function RentalProcess() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas text-zinc-900 uppercase tracking-wide">
            HOW IT WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-300" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-zinc-100 flex items-center justify-center mb-6 shadow-xl text-orange-500 font-bebas text-3xl">
                {step.number}
              </div>
              <h3 className="text-2xl font-bebas text-zinc-900 mb-3 tracking-wide">{step.title}</h3>
              <p className="text-zinc-600 font-inter font-light text-sm max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
