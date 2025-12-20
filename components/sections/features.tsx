"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { initFeaturesAnimation } from "@/animations/features";
import gsap from "gsap"; // Assuming gsap is imported for matchMedia

const FeaturesSection = () => {
    const component = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // Only initialize animation on desktop
        let ctx: gsap.Context | undefined;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            ctx = initFeaturesAnimation(
                ".features-container",
                ".features-slider"
            );
        });

        return () => {
            ctx?.revert();
            mm.kill();
        };
    }, []);

    return (
        <section className="w-full bg-[#E2DFF9] py-20 md:py-0">
            <div
                ref={component}
                className="features-container relative mx-auto h-auto md:h-screen max-w-[1440px] md:overflow-hidden"
            >
                {/* Static Baseline - Hide on Mobile */}
                <div className="hidden md:block absolute right-8 bottom-10 left-8 z-0 border-t border-black" />

                <div ref={slider} className="features-slider flex flex-col md:flex-row h-full w-full md:w-[300%]">
                    {/* View 1: 01 & 02 (Vertical stack on mobile) */}
                    <div className="relative h-auto md:h-full w-full md:w-1/3 px-8 md:px-24 py-10 md:py-0">
                        {/* Feature 01 */}
                        <div className="md:absolute md:top-[15%] md:left-[5%] flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20 md:mb-0">
                            <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px]">
                                <Image
                                    src="/images/features/1.svg"
                                    alt="Feature 1"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[300px] text-center md:text-left">
                                <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-black/60">
                                    /01
                                </span>
                                <h3 className="text-[20px] font-normal leading-[1.2] text-black md:text-[28px]">
                                    Productized and profitable smart contracts
                                </h3>
                            </div>
                        </div>

                        {/* Feature 02 */}
                        <div className="md:absolute md:bottom-[20%] md:left-[45%] flex flex-col md:flex-row items-center gap-6 md:gap-20">
                            <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px]">
                                <Image
                                    src="/images/features/2.svg"
                                    alt="Feature 2"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[300px] text-center md:text-left">
                                <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-black/60">
                                    /02
                                </span>
                                <h3 className="text-[20px] font-normal leading-[1.2] text-black md:text-[28px]">
                                    Tokens governed by privacy-preserving smart contracts
                                </h3>
                            </div>
                        </div>

                        {/* Bottom Label Start - Hide on Mobile */}
                        <span className="hidden md:block absolute bottom-16 left-10 text-[16px] font-bold uppercase tracking-[0.2em] text-black/60">
                            The Dusk Network
                        </span>
                    </div>

                    {/* View 2: 03 & 04 */}
                    <div className="relative h-auto md:h-full w-full md:w-1/3 px-8 md:px-24 py-10 md:py-0">
                        {/* Feature 03 */}
                        <div className="md:absolute md:top-[15%] md:left-[5%] flex flex-col md:flex-row items-center gap-6 md:gap-20 mb-20 md:mb-0">
                            <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px]">
                                <Image
                                    src="/images/features/3.svg"
                                    alt="Feature 3"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[300px] text-center md:text-left">
                                <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-black/60">
                                    /03
                                </span>
                                <h3 className="text-[20px] font-normal leading-[1.2] text-black md:text-[28px]">
                                    Compliant with global regulations and local legislation
                                </h3>
                            </div>
                        </div>

                        {/* Feature 04 */}
                        <div className="md:absolute md:bottom-[20%] md:left-[45%] flex flex-col md:flex-row items-center gap-6 md:gap-20">
                            <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px]">
                                <Image
                                    src="/images/features/4.svg"
                                    alt="Feature 4"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[300px] text-center md:text-left">
                                <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-black/60">
                                    /04
                                </span>
                                <h3 className="text-[20px] font-normal leading-[1.2] text-black md:text-[28px]">
                                    Instant settlement of transactions
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* View 3: 05 */}
                    <div className="relative h-auto md:h-full w-full md:w-1/3 px-8 md:px-24 py-10 md:py-0">
                        {/* Feature 05 */}
                        <div className="md:absolute md:top-[15%] md:left-[5%] flex flex-col md:flex-row items-center gap-6 md:gap-20">
                            <div className="relative aspect-square w-full max-w-[300px] md:max-w-[450px]">
                                <Image
                                    src="/images/features/5.svg"
                                    alt="Feature 5"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="max-w-[350px] text-center md:text-left">
                                <span className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-black/60">
                                    /05
                                </span>
                                <h3 className="text-[24px] font-normal leading-[1.2] text-black md:text-[32px]">
                                    Bulletin boards with access to a single source of truth
                                </h3>
                            </div>
                        </div>

                        {/* Bottom Label End - Hide on Mobile */}
                        <span className="hidden md:block absolute bottom-16 right-8 text-[16px] font-bold uppercase tracking-[0.2em] text-black/60">
                            Keep Scrolling
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;