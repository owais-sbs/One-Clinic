"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-gray-50/50 py-24">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Case Study</h2>
          <p className="text-gray-500 max-w-2xl">
            We build specialized healthcare software that drives better patient outcomes and clinic efficiency.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-6 text-sm font-semibold">
                <span>Client Project</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-black">Maternita Clinic Management System</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We developed a complete maternity clinic management platform for Maternita Clinic, featuring a robust admin panel, real-time appointment system, and integrated billing tools.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Comprehensive Patient Records",
                  "Automated Appointment Reminders",
                  "Secure Payment Processing",
                  "WhatsApp & Zoom Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-black" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Button variant="primary" className="h-12 px-8 flex items-center gap-2">
                  View Project <ExternalLink size={18} />
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-full min-h-[500px] bg-gray-50 overflow-hidden">
              <Image
                src="/maternita.png"
                alt="Maternita Software UI"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
