"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Code2, 
  Headphones 
} from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Zap size={24} />,
    title: "Modern Technology",
    description: "Built with the latest tech stack for speed and reliability."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure System",
    description: "Enterprise-grade security and HIPAA compliance ready."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Scalable Software",
    description: "Grows with your business, from one clinic to a regional group."
  },
  {
    icon: <Code2 size={24} />,
    title: "Custom Development",
    description: "Tailored features specifically for your unique medical workflows."
  },
  {
    icon: <Headphones size={24} />,
    title: "Reliable Support",
    description: "On-call expert technical support whenever you need it."
  }
];

export const WhyChooseUs = () => {
  return (
    <Section id="why-choose-us" className="bg-gray-50/50 py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-black leading-tight"
            >
              Why Leading Clinics <br />
              Choose OnePath Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 mb-10 leading-relaxed text-lg"
            >
              We don't just build websites; we create powerful digital foundations for medical institutions that improve care and optimize management.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft border border-gray-100 flex items-center justify-center text-black">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-500">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-8 bg-black rounded-[3rem] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px]" />
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold mb-6">Built for Reliability</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our platform is engineered to handle high-stakes medical environments where uptime and data integrity are non-negotiable.
              </p>
              
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm font-bold mb-1">High Availability</p>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white" 
                    />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-sm font-bold mb-1">Data Security</p>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-white" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
