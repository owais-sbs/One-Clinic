"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../common/Card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col items-center text-center p-10 group border-none shadow-soft hover:shadow-2xl transition-all duration-500">
        <div className="w-20 h-20 mb-8 rounded-3xl bg-gray-50 flex items-center justify-center text-black transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm flex-grow">{description}</p>
        <div className="mt-8 pt-6 border-t border-gray-50 w-full">
          <button className="text-sm font-bold text-accent hover:underline flex items-center gap-2 mx-auto">
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </Card>
    </motion.div>
  );
};
