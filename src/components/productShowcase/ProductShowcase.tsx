"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { BrowserFrame } from "../common/BrowserFrame";
import { 
  Users, 
  Stethoscope, 
  CreditCard, 
  FileText, 
  UserCircle,
  CheckCircle2
} from "lucide-react";

const products = [
  {
    title: "Patient Management System",
    description: "Streamline your clinic operations with our comprehensive patient management tool. Track patient history, appointments, and medical records in one centralized location.",
    image: "/patients.png",
    icon: <Users className="text-accent" size={24} />,
    features: ["Digital Health Records", "Instant Registration", "Appointment History", "Secure Data Storage"],
    reversed: false
  },
  {
    title: "Doctor Management Panel",
    description: "Manage your medical staff efficiently. Assign doctors to departments, manage schedules, and track consultant performance with ease.",
    image: "/doctor.png",
    icon: <Stethoscope className="text-accent" size={24} />,
    features: ["Staff Scheduling", "Department Assignment", "Performance Metrics", "Consultant Profiles"],
    reversed: true
  },
  {
    title: "Smart Billing & Payments",
    description: "Simplify your financial operations. Professional invoicing, real-time payment tracking, and comprehensive financial reports for your clinic.",
    image: "/payment.png",
    icon: <CreditCard className="text-accent" size={24} />,
    features: ["Automated Invoicing", "Multiple Payment Modes", "Financial Analytics", "Expense Tracking"],
    reversed: false
  },
  {
    title: "Digital Prescriptions",
    description: "Go paperless with our smart prescription system. Generate, store, and share digital prescriptions and medical advice instantly.",
    image: "/prescription2.png",
    icon: <FileText className="text-accent" size={24} />,
    features: ["Quick Prescription Entry", "Medication Database", "Printable Records", "Sharing Options"],
    reversed: true
  },
  {
    title: "Detailed Patient Profiles",
    description: "Get a 360-degree view of your patients. Detailed clinical history, vital stats, and lifestyle records to provide better personalized care.",
    image: "/patientsprofile.png",
    icon: <UserCircle className="text-accent" size={24} />,
    features: ["Clinical Summaries", "Vital Signs Tracking", "Lifestyle Data", "Document Management"],
    reversed: false
  }
];

export const ProductShowcase = () => {
  return (
    <Section id="showcase" className="bg-white py-12">
      <Container>
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-6 text-sm font-semibold"
          >
            <span>Platform Showcase</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Actual Software, <span className="text-accent">Actual Results.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Take a look at the real interface that powers hundreds of clinics and helps healthcare providers deliver excellence every day.
          </motion.p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {products.map((product, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${product.reversed ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: product.reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${product.reversed ? 'lg:order-2' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    {product.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-black">{product.title}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={18} className="text-accent" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${product.reversed ? 'lg:order-1' : ''}`}
              >
                <BrowserFrame>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top"
                  />
                </BrowserFrame>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
