"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { DoctorCard } from "./DoctorCard";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialization: "Principal OB/GYN Specialist",
    experience: "12+ Years",
    rating: 4.9,
    image: "/doctors/sarah.jpg"
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Maternal-Fetal Medicine",
    experience: "15+ Years",
    rating: 4.8,
    image: "/doctors/michael.jpg"
  },
  {
    name: "Dr. Elena Rodriguez",
    specialization: "Pediatric Obstetrician",
    experience: "10+ Years",
    rating: 5.0,
    image: "/doctors/elena.jpg"
  },
  {
    name: "Dr. David Brooks",
    specialization: "Reproductive Specialist",
    experience: "18+ Years",
    rating: 4.7,
    image: "/doctors/david.jpg"
  }
];

export const Doctors = () => {
  return (
    <Section id="doctors">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Meet Our Specialists
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              Our team consists of highly qualified and compassionate maternity healthcare professionals dedicated to your well-being.
            </motion.p>
          </div>
          <Button variant="outline">View All Doctors</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
