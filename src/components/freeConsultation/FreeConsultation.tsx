"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";

export const FreeConsultation = () => {
  return (
    <Section id="free-consultation" className="py-24">
      <Container>
        <div className="bg-black rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col items-center text-center">
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-10"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-bold mb-8 backdrop-blur-md border border-white/10 uppercase tracking-widest">
              Limited Time Offer
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Start Your Maternity <br />
              Journey <span className="text-accent">For Free</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Book a 15-minute introductory consultation with our head specialists. No commitment required, just expert guidance when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" className="h-16 px-12 text-lg font-bold rounded-2xl bg-white text-black hover:bg-gray-100">
                Claim Free Consultation
              </Button>
              <Button variant="outline" className="h-16 px-12 text-lg font-bold rounded-2xl border-white/20 text-white hover:bg-white/10">
                View All Doctors
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
