let tl = gsap.timeline({ delay: 1.5, defaults: { duration: 0.5 } });

tl.fromTo(
  ".nonauth",
  { height: "0", opacity: 0 },
  { height: "100%", opacity: 0.5 }
);
tl.fromTo(
  ".nonauth",
  { width: "0 ", opacity: 0.5 },
  { width: "40%", opacity: 1 }
)
  .from(".glow", {
    opacity: 0,
    y: -100,
    ease: "bounce",
    stagger: 0.6,
  })
  .from(".box-text1", {
    opacity: 0,
    x: 100,
    ease: "rough",
  })
  .from(".box-text2", {
    opacity: 0,
    x: 100,
    ease: "power2.out",
  })
  .from(".dare", {
    opacity: 0,
    y: -100,
    ease: "power2.out",
  });
