"use client";

import Link from "next/link";
import MaskText from "@/components/motion/MaskText";
import Reveal from "@/components/motion/Reveal";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#2d7a3a,transparent_70%)]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <MaskText text={title} />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">{subtitle}</p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 transform hover:scale-105"
              style={{ backgroundColor: "#2d7a3a" }}
            >
              {buttonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-navy"
              >
                {secondaryButtonText}
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
