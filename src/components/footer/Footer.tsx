import React from "react";
import Link from "next/link";
import { User, MessageCircle, Share2, Globe, Heart } from "lucide-react";
import { Container } from "../common/Container";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-bold tracking-tighter block">
              One clinic <span className="text-accent">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed font-medium">
              Empowering clinics and hospitals with cutting-edge management software. We build the future of healthcare digital infrastructure.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Main</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              {["Home", "Features", "Portfolio", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Software</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              {["Patient Records", "Booking Engine", "Billing Platform", "API Solutions", "Cloud Hosting"].map((service) => (
                <li key={service} className="hover:translate-x-1 transition-transform duration-300">
                  <Link href="#" className="hover:text-white transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Newsletter</h4>
            <p className="text-gray-400 mb-8 font-medium">Get the latest healthcare SaaS updates delivered to your inbox.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl flex-grow focus:border-white outline-none transition-all font-medium"
              />
              <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-black hover:text-white border border-white transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-medium">
            © 2024 OnePath Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <span>Building for a healthier tomorrow.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
