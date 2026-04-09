"use client";

import React from "react";
import { Check } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small clinics and individual practitioners.",
    features: [
      "Up to 500 Patients",
      "Basic Appointment Scheduling",
      "Digital Health Records",
      "Email Support",
      "Basic Analytics"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing clinics with multiple providers.",
    popular: true,
    features: [
      "Unlimited Patients",
      "Advanced Scheduling & Reminders",
      "Billing & Invoicing",
      "WhatsApp & Zoom Integration",
      "Priority Support",
      "Detailed Analytics"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for hospitals and large medical groups.",
    features: [
      "Multiple Locations",
      "Custom Feature Development",
      "Dedicated Account Manager",
      "On-site Training",
      "SLA Guarantee",
      "API Access"
    ]
  }
];

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-black"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Choose the plan that best fits your clinic's needs. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? "border-black shadow-xl ring-1 ring-black" 
                  : "border-gray-100 shadow-soft"
              } bg-white flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-black text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-black">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">
                    {plan.price !== "Custom" && "$"}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-black" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "primary" : "outline"} 
                className="w-full h-12"
              >
                Get Demo
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
