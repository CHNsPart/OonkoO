"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";
import { motion } from "framer-motion";

// Partner logos array with their paths and dimensions
const partners = [
  { src: "/partners/booring.png", alt: "Google", width: 120, height: 40 },
  { src: "/partners/full_logo_white.png", alt: "Microsoft", width: 120, height: 40 },
  { src: "/partners/glo.png", alt: "Amazon", width: 120, height: 40 },
  { src: "/partners/banbase.png", alt: "Meta", width: 120, height: 40 },
];

export default function Partners() {
  return (
    <section className="w-full pt-24 md:pt-32 relative z-[1] overflow-hidden">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <InfiniteSlider 
            duration={30} 
            durationOnHover={0}
            className="w-full py-4"
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="relative flex items-center justify-center min-w-[200px] h-20 px-8 group"
              >
                <div className="relative w-full h-full transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain w-1/2 h-full"
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </motion.div>
      </div>
    </section>
  );
}