"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Card } from "../common/Card";

const testimonials = [
  {
    name: "Emily Watson",
    review: "The care I received at One Clinic was exceptional. The doctors are highly professional and the platform made booking appointments so easy.",
    rating: 5
  },
  {
    name: "Jessica Miller",
    review: "Virtual consultations were a lifesaver during my third trimester. Real-time updates on WhatsApp kept me informed at every step.",
    rating: 5
  },
  {
    name: "Sophia Brown",
    review: "I highly recommend One Clinic for anyone looking for modern and compassionate maternity care. The staff is wonderful!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-white py-24">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tight">Trusted by Mothers</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Real stories from the families who experienced our premium care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-10 relative group border-gray-50 shadow-soft hover:shadow-2xl transition-all duration-500 rounded-[2.5rem]">
                <Quote className="absolute top-10 right-10 text-gray-100 group-hover:text-accent/10 transition-colors duration-500" size={80} />
                <div className="flex gap-1 mb-8 relative z-10">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-black text-black" />
                  ))}
                </div>
                <p className="text-xl text-gray-600 mb-10 flex-grow leading-relaxed font-medium relative z-10 italic">
                  "{t.review}"
                </p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 text-black flex items-center justify-center font-bold text-xl border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-accent text-xs font-bold uppercase tracking-wider">Patient</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
