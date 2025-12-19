"use client";

import React from "react";
import Image from "next/image";

const ADVANTAGES = [
    "Issuers are exposed to global, consolidated liquidity",
    "Institutions have access to instant clearance and settlement without custodianship liabilities",
    "There is no distinction between classic and crypto users; everyone has access to all market sectors. Including crypto",
];

const SolutionSection = () => {
    return (
        <section className="w-full bg-[#101010] py-24 px-4 overflow-hidden text-white">
            <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-start">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-[1px] bg-white/40"></div>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">The Solution</span>
                </div>

                <h2 className="text-[40px] md:text-[80px] font-normal leading-[1.1] text-white mb-24">
                    <span className="text-[#3E7FFF]">User</span>-Centric <br />
                    Landscape
                </h2>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Illustration - Now on the right for variety/balance if matching design */}
                    <div className="lg:order-2 relative w-full aspect-square max-w-[600px]">
                        <Image
                            src="/images/solution-landscape.svg"
                            alt="Solution Landscape Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Points List */}
                    <div className="lg:order-1 flex flex-col gap-10">
                        {ADVANTAGES.map((advantage, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="mt-1.5 flex-shrink-0">
                                    <Image
                                        src="/images/light-star.svg"
                                        alt="star"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <p className="text-[14px] md:text-[16px] leading-[1.6] text-white/70 max-w-[440px]">
                                    {advantage}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;