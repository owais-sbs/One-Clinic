"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-morphism py-4" : "bg-transparent py-6"}`}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          One clinic  <span className="text-accent">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/login" className="text-sm font-medium hover:text-accent transition-colors">
            Login
          </Link>
        </div>

        <div className="hidden md:block">
          <Button variant="primary">Request Demo</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black p-2" 
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </Container>

      <MobileMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        navLinks={navLinks} 
      />
    </nav>
  );
};
