"use client";

import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 p-8 md:p-16 relative overflow-hidden">
          {/* Accent Graphic */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-3xl rounded-full" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
            <div className="flex-1">
              <motion.h2 
                className="text-4xl md:text-5xl font-bebas text-white uppercase mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                READY TO RIDE?
              </motion.h2>
              <motion.p 
                className="text-zinc-400 font-light text-lg mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Your next adventure starts in Bagdogra. Choose your bike and get moving.
              </motion.p>
              
              <div className="flex flex-col gap-4 text-zinc-300">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin size={20} className="text-orange-500" />
                  <span className="font-medium">Bhuttabari, Bagdogra, Siliguri, West Bengal</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={20} className="text-orange-500" />
                  <span className="font-medium font-bebas text-xl tracking-wider">+91 7477393977</span>
                </div>
              </div>
            </div>

            <motion.div 
              className="flex flex-col gap-4 w-full md:w-auto min-w-[240px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="tel:+917477393977"
                className="w-full bg-white hover:bg-orange-600 text-black hover:text-white transition-colors font-semibold py-4 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a 
                href="https://wa.me/917477393977"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1fbc5a] text-white transition-colors font-semibold py-4 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a 
                href="#bikes"
                className="w-full border border-zinc-700 hover:bg-zinc-800 text-white transition-colors font-semibold py-4 flex items-center justify-center"
              >
                Book a Bike
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
