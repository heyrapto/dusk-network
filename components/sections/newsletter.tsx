"use client";

import React from "react";
import Image from "next/image";

const NewsletterSection = () => {
    return (
        <section className="relative w-full bg-[#101010] h-screen py-32 px-4 overflow-hidden text-center text-white">
            {/* Background Curves */}
            <div className="absolute left-0 top-0 h-full w-1/3 opacity-40">
                <Image
                    src="/images/newsletter/bg-left.png"
                    alt="background curve left"
                    fill
                    className="object-contain object-left"
                />
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-40">
                <Image
                    src="/images/newsletter/bg-right.png"
                    alt="background curve right"
                    fill
                    className="object-contain object-right"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col mt-48">
                <h2 className="mb-12 text-[30px] font-normal leading-tight md:text-[40px]">
                    <span className="text-[#3E7FFF]">Subscribe</span> to our newsletter <br />
                    to get the latest Dusk updates
                </h2>

                {/* Subscription Form */}
                <div className="mx-auto flex w-full max-w-[600px] items-center rounded-full bg-white/10 p-1.5 backdrop-blur-md transition-all focus-within:ring-1 focus-within:ring-[#3E7FFF]/50">
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 bg-transparent px-6 py-3 text-[14px] outline-none placeholder:text-white/40"
                    />
                    <button className="rounded-full bg-white px-8 py-3 text-[11px] font-bold tracking-[0.2em] text-black transition-colors hover:bg-white/90 uppercase">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;