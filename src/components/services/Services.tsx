"use client";

import React from "react";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  Video, 
  LayoutDashboard, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Users size={32} />,
    title: "Patient Management System",
    description: "Digital health records and easy onboarding for a smooth healthcare journey."
  },
  {
    icon: <Calendar size={32} />,
    title: "Appointment Scheduling",
    description: "Schedule visits seamlessly with your preferred specialists at your convenience."
  },
  {
    icon: <CreditCard size={32} />,
    title: "Billing and Payments",
    description: "Hassle-free and secure payment options for all consultations and services."
  },
  {
    icon: <MessageSquare size={32} />,
    title: "WhatsApp Integration",
    description: "Stay informed with real-time updates and reminders directly on WhatsApp."
  },
  {
    icon: <Video size={32} />,
    title: "Zoom Video Consultation",
    description: "Connect with patients remotely through integrated high-definition video calls."
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Admin Dashboard",
    description: "Centralized control panel to manage clinic operations efficiently."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics and Reports",
    description: "Gain valuable insights into your clinic's performance with detailed data."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Subscription Management",
    description: "Easily manage client subscriptions and recurring payment plans."
  }
];

export const Services = () => {
  return (
    <Section id="features" className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-black"
          >
            Clinic Management Software Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Our comprehensive platform provides all the tools you need to run a modern, efficient healthcare business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ServiceCard 
              key={index} 
              {...feature} 
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
