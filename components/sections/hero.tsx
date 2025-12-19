"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PARTNER_LOGOS } from "@/constants";
import { initHeroAnimation } from "@/animations/hero";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = initHeroAnimation(".hero-container", ".hero-sun");
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full pt-12 pb-10 px-4 flex justify-center">
            <div
                ref={containerRef}
                className="hero-container relative w-full max-w-[1440px] aspect-1440/950 min-h-[700px] rounded-[40px] overflow-hidden bg-[#101010] flex flex-col items-center justify-between py-16 px-8"
            >
                {/* Background Layers */}
                <div className="absolute inset-0 z-0 text-white">
                    {/* Grid/Lines Background */}
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="/images/hero/lines-bg.svg"
                            alt="Grid background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Sun/Light Source */}
                    <div
                        ref={sunRef}
                        className="hero-sun absolute bottom-48 left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-square"
                    >
                        <Image
                            src="/images/hero/sun.svg"
                            alt="Sun light"
                            fill
                            className="object-contain translate-y-1/2"
                        />
                    </div>

                    {/* Bottom Dunes/Waves */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2">
                        <Image
                            src="/images/hero/bottom-dunes.png"
                            alt="Dunes background"
                            fill
                            className="object-cover object-bottom"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-center text-center mt-12">
                    <h1 className="text-[40px] md:text-[80px] font-normal leading-[1.1] tracking-tight text-[#E5E5E5] max-w-[1000px]">
                        Regulated <span className="text-[#3E7FFF] italic font-serif lowercase">and</span>{" "}
                        <span className="bg-black/80 px-4 py-1 rounded-lg border border-white/5">Decentralized</span> Finance
                        <span className="text-[#3E7FFF]">.</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-[450px]">
                        <Link
                            href="#"
                            className="px-8 py-2 rounded-full bg-white text-black text-[16px] font-bold tracking-[0.2em] hover:bg-white/90 transition-all uppercase"
                        >
                            Mainnet Explorer
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-2 rounded-full bg-white text-black text-[16px] font-bold tracking-[0.2em] hover:bg-white/90 transition-all uppercase"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Partner Logos */}
                <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-8 md:gap-4 px-4 opacity-70 mt-auto">
                    {PARTNER_LOGOS.map((logo) => (
                        <div key={logo.alt} className="relative h-6 w-32 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;