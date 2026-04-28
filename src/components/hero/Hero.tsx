"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";

import { CheckCircle2, Star, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <Section id="hero" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-black mb-6 text-sm font-medium border border-black/10">
              <ShieldCheck size={14} className="text-black" />
              <span>Empowering Clinics with Smart Software Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-black">
              Clinic Management <br />
              Software for <span className="text-accent">Hospitals.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Build, manage, and scale your healthcare business with our modern digital clinic management platform. We develop complete maternity and healthcare management systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" className="h-12 px-8 text-base">Request Demo</Button>
              <Button variant="outline" className="h-12 px-8 text-base border-gray-200">View Software</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 py-6 border-t border-gray-100 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <ShieldCheck size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Healthcare SaaS</p>
                  <p className="text-[10px] text-gray-400 mt-1">Verified Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <ShieldCheck size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Secure Platform</p>
                  <p className="text-[10px] text-gray-400 mt-1">Enterprise Grade</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  <ShieldCheck size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Scalable</p>
                  <p className="text-[10px] text-gray-400 mt-1">Cloud Native</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] blur-3xl opacity-30" />
              
              <div 
                className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-premium border border-gray-100"
              >
                <Image
                  src="/dashboard1.png"
                  alt="Clinic Management Software Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-xl shadow-soft border border-gray-50 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold font-sans">99.9% Uptime</p>
                  <p className="text-[10px] text-gray-400">System Monitoring</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
