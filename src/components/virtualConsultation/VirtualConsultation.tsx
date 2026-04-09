"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Globe, MessageCircle } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";

export const VirtualConsultation = () => {
  return (
    <Section id="virtual-consultation" className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-50 animate-pulse" />
              <Image
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop"
                alt="Virtual Consultation"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Zoom Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-soft border border-gray-50 flex items-center gap-4 z-20"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#2D8CFF]/10 flex items-center justify-center text-[#2D8CFF]">
                <Video size={28} />
              </div>
              <div>
                <p className="text-sm font-bold">Zoom Ready</p>
                <p className="text-xs text-gray-400">Secure Video Calls</p>
              </div>
            </motion.div>

            {/* Floating WhatsApp Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-soft border border-gray-50 flex items-center gap-4 z-20"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="text-sm font-bold">WhatsApp</p>
                <p className="text-xs text-gray-400">Real-time Updates</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6">
              Online Healthcare
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Consult From Anywhere</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
              Experience personalized maternity care without leaving your home. Our virtual clinic brings top-tier specialists to you through high-definition video and instant messaging.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { icon: <Video className="text-accent" size={24} />, title: "HD Video Calls", desc: "Crystal clear consults via Zoom" },
                { icon: <MessageCircle className="text-accent" size={24} />, title: "Instant Access", desc: "Quick updates on WhatsApp" },
                { icon: <Globe className="text-accent" size={24} />, title: "Worldwide", desc: "No travel time required" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" className="h-14 px-10 text-lg rounded-2xl">
              Start Your Consultation
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
