import gsap from "gsap";
const default_duration = 1;

export const timeline = gsap.timeline({
  defaults: { ease: "", duration: default_duration, opacity: 0 },
});
