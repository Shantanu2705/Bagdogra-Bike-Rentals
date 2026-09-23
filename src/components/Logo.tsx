import React from 'react';
import { Mountain, Bike } from 'lucide-react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center relative w-16 h-16 ${className}`}>
      <Mountain className="text-white absolute bottom-1" size={54} strokeWidth={2} />
      <Bike className="text-orange-500 relative z-10 drop-shadow-xl" size={48} strokeWidth={2.5} />
    </div>
  );
}
