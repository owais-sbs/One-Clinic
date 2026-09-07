"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const copy = {
  en: {
    badge: "Get a Demo",
    heading: "Let's Scale Your Healthcare Business.",
    intro:
      "Ready to modernize your clinic operations? Schedule a call with our experts to see how OnePath Clinic can transform your healthcare management.",
    email: "Email Us",
    phone: "Call Support",
    hq: "Headquarters",
    formTitle: "Request a Software Demo",
    name: "Full Name",
    emailLabel: "Email Address",
    clinic: "Clinic / Hospital Name",
    message: "Message",
    sending: "Sending...",
    submit: "Schedule a Demo",
    legal: "By submitting, you agree to our Privacy Policy and Terms of Service.",
    heritage: "Our Heritage",
    heritageText: "Empowering clinics since the beginning of digital healthcare.",
    success: "Thanks — we received your request and will be in touch shortly.",
    error: "Unable to send your request.",
  },
  ar: {
    badge: "احجز عرضاً",
    heading: "لنوسّع أعمالكم الصحية.",
    intro:
      "هل أنتم جاهزون لتحديث تشغيل العيادة؟ حددوا موعداً مع خبرائنا لرؤية كيف يغيّر وان باث كلينك إدارة الرعاية.",
    email: "راسلونا",
    phone: "اتصلوا بالدعم",
    hq: "المقر",
    formTitle: "اطلبوا عرض البرنامج",
    name: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    clinic: "اسم العيادة / المستشفى",
    message: "الرسالة",
    sending: "جارٍ الإرسال...",
    submit: "حدد موعد العرض",
    legal: "بالإرسال توافقون على سياسة الخصوصية وشروط الخدمة.",
    heritage: "إرثنا",
    heritageText: "نمكّن العيادات منذ بداية الرعاية الصحية الرقمية.",
    success: "شكراً — استلمنا طلبكم وسنتواصل قريباً.",
    error: "تعذر إرسال الطلب.",
  },
};

export const Contact = ({ locale = "en" }: { locale?: Locale }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clinic, setClinic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "demo",
          name,
          email,
          clinic,
          message,
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send your request.");
      }

      setStatus("success");
      setFeedback(copy[locale].success);
      setName("");
      setEmail("");
      setClinic("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : copy[locale].error);
    }
  };

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
              {copy[locale].badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter text-black">{copy[locale].heading}</h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-lg">
              {copy[locale].intro}
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: <Mail size={20} />, title: copy[locale].email, content: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: <Phone size={20} />, title: copy[locale].phone, content: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
                { icon: <MapPin size={20} />, title: copy[locale].hq, content: siteConfig.headquarters }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="p-3 bg-gray-50 rounded-xl text-black border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-black">{item.title}</h3>
                    {"href" in item && item.href ? (
                      <a href={item.href} className="text-gray-500 text-sm hover:text-black">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm max-w-sm">{item.content}</p>
                    )}
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
                <p className="text-xs font-bold text-black uppercase tracking-widest mb-1">{copy[locale].heritage}</p>
                <p className="text-sm font-medium text-gray-700">{copy[locale].heritageText}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 shadow-premium border-gray-100 bg-white rounded-[2.5rem]">
              <h3 className="text-2xl font-bold mb-8 tracking-tight text-black">{copy[locale].formTitle}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="demo-name" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{copy[locale].name}</label>
                    <input id="demo-name" name="name" type="text" required value={name} onChange={(event) => setName(event.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="demo-email" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{copy[locale].emailLabel}</label>
                    <input id="demo-email" name="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="john@clinic.com" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="demo-clinic" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{copy[locale].clinic}</label>
                  <input id="demo-clinic" name="clinic" type="text" required value={clinic} onChange={(event) => setClinic(event.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm" placeholder="City Medical Center" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="demo-message" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{copy[locale].message}</label>
                  <textarea id="demo-message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:ring-1 focus:ring-black outline-none transition-all text-sm h-32" placeholder="Tell us about your clinic's needs..."></textarea>
                </div>
                <Button type="submit" variant="primary" disabled={status === "sending"} className="w-full h-14 text-base font-bold rounded-xl shadow-lg">
                  {status === "sending" ? copy[locale].sending : copy[locale].submit}
                </Button>
                {feedback && (
                  <p className={`text-center text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                    {feedback}
                  </p>
                )}
                <p className="text-center text-[10px] text-gray-400 mt-4">
                  {copy[locale].legal}
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
