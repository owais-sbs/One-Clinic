"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Star } from "lucide-react";
import { Card } from "../common/Card";
import { Button } from "../common/Button";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  rating: number;
  image: string;
  index: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialization, experience, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="p-0 overflow-hidden flex flex-col h-full group border-none shadow-soft hover:shadow-2xl">
        <div className="aspect-[4/5] bg-gray-soft flex items-center justify-center relative transition-colors">
          <div 
            className="absolute inset-0 bg-white"
            style={{
              maskImage: 'radial-gradient(circle at center, transparent 30%, white 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, transparent 30%, white 100%)',
            }}
          />
          <User size={64} className="text-gray-300 relative z-10" />
        </div>
        <div className="p-6 flex flex-col flex-grow text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
              />
            ))}
            <span className="text-xs font-bold ml-1">{rating.toFixed(1)}</span>
          </div>
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-accent text-sm font-semibold mb-3">{specialization}</p>
          <div className="flex items-center justify-center gap-2 mb-6 text-gray-400 text-xs font-medium uppercase tracking-wider">
            <span>{experience} Experience</span>
          </div>
          <Button variant="primary" className="w-full text-sm font-bold py-3">
            Book Appointment
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
