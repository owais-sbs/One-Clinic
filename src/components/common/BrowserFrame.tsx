import React from "react";
import { motion } from "framer-motion";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200 ${className}`}>
      {/* Browser Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 max-w-md mx-auto h-6 bg-white rounded border border-gray-200 flex items-center px-3">
          <div className="w-full h-2 bg-gray-100 rounded-full" />
        </div>
      </div>
      {/* Content */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
