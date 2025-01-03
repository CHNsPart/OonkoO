"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/cta-button';
import { ArrowRight } from 'lucide-react';
import { FaSquareXTwitter, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    'join us': [
      { name: 'Careers', href: '/careers' },
      { name: 'Culture', href: '/culture' },
      { name: 'Benefits', href: '/benefits' },
    ],
    OonkoO: [
      { name: '🟢 Are you with us?', href: 'https://oonkoo.com/admin' },
    ],
  };

  const connect = [
    { icon: <FaSquareXTwitter />, href: 'https://twitter.com' },
    { icon: <FaSquareInstagram />, href: 'https://instagram.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaFacebookSquare />, href: 'https://facebook.com' },
  ]

  return (
    <footer className="relative mt-32 sm:mt-40 lg:mt-48">
      {/* Contact Form Card */}
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto -mt-32 sm:-mt-32 mb-24 rounded-3xl bg-gradient-to-br from-brand-primary/20 to-black/40 backdrop-blur-sm p-6 sm:p-8 border border-white/10 relative z-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-white/70 mb-6">
                Ready to transform your digital presence? Get in touch with us.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex justify-end"
              >
                <HoverBorderGradient>
                  <span className="flex items-center gap-2">
                    Get started <ArrowRight className="w-4 h-4" />
                  </span>
                </HoverBorderGradient>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-black/40 backdrop-blur-md z-10">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 col-span-1 md:col-span-2"
            >
              <Link href="/" className="block">
                <Image
                  src="/oonkoo_logo.svg"
                  alt="OonkoO Logo"
                  width={200}
                  height={70}
                  className="size-28 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-white/70 max-w-md">
                {"There is no limit to what you can achieve with OonkoO. Let's create something extraordinary together."}
              </p>
              <div className="flex items-center gap-4">
                {connect.map((item, index) => (
                  <Link 
                    key={index} 
                    href={item.href}
                    className="text-white/70 hover:text-brand-primary transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 col-span-1 md:col-span-3">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold capitalize relative">
                    {category}
                    <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-primary/50 rounded-full"></span>
                  </h3>
                  <ul className="space-y-3 pt-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-white/70 hover:text-brand-primary transition-colors duration-200 text-sm sm:text-base"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
              <div className="flex items-center gap-2 shrink-0 md:mr-8">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-white/70 whitespace-nowrap">All systems operational</span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-sm text-white/70 w-full">
                <span>© 2024 OonkoO. All rights reserved</span>
                <Link href="/privacy" className="hover:text-brand-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-brand-primary transition-colors">
                  Terms of Use
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
        </div>
      </div>
    </footer>
  );
}