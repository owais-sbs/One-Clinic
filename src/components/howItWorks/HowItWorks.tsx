"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Search, Calendar, CheckCircle } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";

const steps = [
  {
    icon: <UserPlus size={24} />,
    title: "Register",
    description: "Create your profile with basic details to start your journey."
  },
  {
    icon: <Search size={24} />,
    title: "Choose Doctor",
    description: "Browse through our specialists and find the perfect match."
  },
  {
    icon: <Calendar size={24} />,
    title: "Book Appointment",
    description: "Select a convenient time slot and confirm your booking."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Get Care",
    description: "Visit the clinic or consult online for expert care."
  }
];

export const HowItWorks = () => {
  return (
    <Section id="how-it-works" className="bg-gray-soft/50 py-24">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Four simple steps to premium maternity care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative max-w-6xl mx-auto">
          {/* Enhanced Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-white z-0 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-accent"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="relative group">
                <div className="w-28 h-28 rounded-[2.5rem] bg-white flex items-center justify-center mb-8 shadow-soft border border-gray-50 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-2xl group-hover:border-accent">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-sm shadow-xl border-4 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="primary" className="h-14 px-12 text-lg rounded-2xl">
            Register Now
          </Button>
        </div>
      </Container>
    </Section>
  );
};
