import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const initHeroAnimation = (
    containerSelector: string,
    sunSelector: string
) => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        gsap.to(sunSelector, {
            y: "40%", // Move sun down
            scale: 0.9, // Slight scale down as it hides
            opacity: 0.5, // Fade out slightly
            ease: "none",
            scrollTrigger: {
                trigger: containerSelector,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });
    });

    return ctx;
};
