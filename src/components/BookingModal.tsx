"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';
import { Bike } from '@/data/bikes';
import Image from 'next/image';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bike: Bike | null;
}

export default function BookingModal({ isOpen, onClose, bike }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    startDate: '',
    endDate: '',
    requirements: ''
  });

  if (!bike) return null;

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I am interested in renting the ${bike.name}.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADates: ${formData.startDate} to ${formData.endDate}%0ARequirements: ${formData.requirements}`;
    window.open(`https://wa.me/917477393977?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className="relative bg-zinc-950 border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors z-10 bg-black/50 p-2 rounded-full backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Bike Image Side */}
              <div className="w-full md:w-2/5 relative min-h-[200px] bg-zinc-900 hidden md:block">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bebas text-2xl uppercase">{bike.name}</h4>
                  <p className="text-orange-500 font-bold">₹{bike.price} / day</p>
                </div>
              </div>

              {/* Form Side */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-bebas text-white uppercase mb-2">Request Booking</h3>
                <p className="text-sm text-zinc-400 mb-6">
                  Fill out the form to request {bike.name}. We will confirm availability via WhatsApp.
                </p>

                <form onSubmit={handleWhatsApp} className="flex flex-col gap-4 flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">Start Date</label>
                      <input 
                        required 
                        type="date" 
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">End Date</label>
                      <input 
                        required 
                        type="date" 
                        value={formData.endDate}
                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                        className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-wider">Requirements / Message</label>
                    <textarea 
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                      className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle size={18} />
                    Submit via WhatsApp
                  </button>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="h-px bg-zinc-800 flex-grow" />
                    <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">OR</span>
                    <div className="h-px bg-zinc-800 flex-grow" />
                  </div>

                  <a 
                    href="tel:+917477393977"
                    className="w-full border border-zinc-700 hover:bg-zinc-800 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={18} />
                    Call Us Directly
                  </a>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
