"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        index: "01",
        title: "Productized and profitable smart contracts",
        image: "/images/features/1.svg",
    },
    {
        index: "02",
        title: "Tokens governed by privacy-preserving smart contracts",
        image: "/images/features/2.svg",
    },
    {
        index: "03",
        title: "Compliant with global regulations and local legislation",
        image: "/images/features/3.svg",
    },
    {
        index: "04",
        title: "Instant settlement of transactions",
        image: "/images/features/4.svg",
    },
    {
        index: "05",
        title: "Bulletin boards with access to a single source of truth",
        image: "/images/features/5.svg",
    },
];

const FeaturesSection = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".feature-card");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + (slider.current?.offsetWidth || 0),
                },
            });
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={component} className="overflow-hidden bg-[#E5E5E5]">
            <div ref={slider} className="flex h-screen w-[500%] items-center">
                {FEATURES.map((feature) => (
                    <div
                        key={feature.index}
                        className="feature-card flex h-full w-screen flex-shrink-0 flex-col items-center justify-center px-12 md:px-24"
                    >
                        <div className="flex w-full max-w-[1440px] items-center justify-between gap-10 md:gap-20">
                            <div className="relative aspect-square w-full max-w-[400px] flex-shrink-0 md:max-w-[500px]">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[500px] text-left">
                                <span className="mb-4 block text-[12px] font-bold tracking-[0.2em] text-black opacity-60">
                                    /{feature.index}
                                </span>
                                <h3 className="text-[28px] font-normal leading-[1.2] text-black md:text-[48px]">
                                    {feature.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Info */}
            <div className="fixed bottom-10 left-0 right-0 z-10 px-12 md:px-24">
                <div className="mx-auto flex max-w-[1440px] items-end justify-between border-t border-black/10 pt-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-black uppercase opacity-60">
                        IE Dusk Network
                    </span>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-black uppercase">
                            Keep Scrolling
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;