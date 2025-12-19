"use client";

import React from "react";

const MissionSection = () => {
    return (
        <section className="w-full py-32 px-4 relative">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center relative">

                <div className="max-w-[950px] text-center">
                    <p className="text-[24px] md:text-6xl leading-[1.4] text-black font-normal">
                        Our mission is to unlock economic inclusion by bringing{" "}
                        <span className="text-[#3E7FFF]">institution-level assets</span> to anyone&#39;s wallet.
                        Dusk has the only <span className="text-[#3E7FFF]">privacy-first</span> technology to
                        bring classic finance and real-world assets on-chain.
                    </p>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-[-128px] left-8 right-8 h-px bg-black"></div>
            </div>
        </section>
    );
};

export default MissionSection;