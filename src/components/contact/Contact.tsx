"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { Card } from "../common/Card";

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-black/5 text-black text-sm font-bold mb-6 border border-black/10">
              Get a Demo
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-black">Let&apos;s Scale Your Healthcare Business.</h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-lg">
              Ready to modernize your clinic operations? Schedule a call with our experts to see how OnePath Clinic  can transform your healthcare management.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <Mail size={20} />, title: "Email Us", content: "demo@onepathsolutions.com" },
                { icon: <Phone size={20} />, title: "Call Support", content: "+1 (555) 000-1234" },
                { icon: <MapPin size={20} />, title: "Headquarters", content: "Silicon Valley, CA" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="p-3 bg-gray-50 rounded-xl text-black border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-black">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Repurposed Hero Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-soft border border-gray-100 mt-12">
              <Image
                src="/maternity_hero.png"
                alt="Healthcare Management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/50">
                <p className="text-xs font-bold text-black uppercase tracking-widest mb-1">Our Heritage</p>
                <p className="text-sm font-medium text-gray-700">Empowering clinics since the beginning of digital healthcare.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 shadow-premium border-gray-100 bg-white rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-black">Request a Software Demo</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="john@clinic.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clinic / Hospital Name</label>
                  <input type="text" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="City Medical Center" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm h-32" placeholder="Tell us about your clinic's needs..."></textarea>
                </div>
                <Button variant="primary" className="w-full h-14 text-base font-bold rounded-xl shadow-lg">
                  Schedule a Demo
                </Button>
                <p className="text-center text-[10px] text-gray-400 mt-4">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
