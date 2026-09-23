import React from 'react';

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-zinc-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/videos/bagdogra-bike-rental.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bebas text-white tracking-wide uppercase mb-4 shadow-sm">
          FEEL THE MOUNTAINS
        </h2>
        <p className="text-zinc-200 text-lg md:text-xl max-w-2xl font-inter font-light">
          Experience the thrill of riding through the most beautiful landscapes in North Bengal and the Himalayas.
        </p>
      </div>
    </section>
  );
}
