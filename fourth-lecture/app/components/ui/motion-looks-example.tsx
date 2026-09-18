"use client";
// prettierrc - automatically sorts classes after saving file

import { IconRocket } from "@tabler/icons-react";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

export function MotionHooksExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#05291c"];

  const [background, setBackground] = useState(backgrounds[0]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    // 0.44 --> 0.44 * 3 = 1.32 --> 1
    // 0.78 --> 0.78 * 3 = 2.34 --> 2
    // 0.01 --> 0.01 * 3 = 0.03 --> 0
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{
        background,
      }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, idx) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  // useScroll is used to create scroll-linked animations, like progress indicators and parallax effects.
  const ref = useRef<HTMLDivElement>(null); // this is a react hook used to reference to the html element and it will tell us the position of that element when we scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start end means when the start of the element is at the end of the viewport, end start means when the end of the element is at the start of the viewport, top bottom means when the top of the element is at the bottom of the viewport, bottom top means when the bottom of the element is at the top of the viewport
  });

  // useMotionValueEvent manages a motion value event handler throughout the lifecycle of a React component.
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("the latest value of scrollYProgress is", latest);
  // });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  ); // useTransform creates a new motion value that transforms the output of one or more motion values. useSpring creates a motion value that will animate to its latest target with a spring animation this makes the animation much smoother.
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blurContent = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 items-center gap-20 py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blurContent}px)`, // we cant use motion value as string interpolation in css so for that we can use useMotionTemplate
          scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-lg text-neutral-400">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state of the art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="/acertinity-logo.png"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Replicate great Art",
    description:
      "Generate the painting of renowned artists, like Van Gogh or Monet or Majnu bhai.",
    content: (
      <Image
        src="https://assets.aceternity.com/pro/art.jpeg"
        alt="car"
        height="500"
        width="500"
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Batch generate images with a single click.",
    description:
      "With our state of the art AI, you can generate a batch of images within 10 seconds with absolutely no compute power.",
    content: (
      <div className="relative">
        <div className="-rotate-[10deg]">
          <Image
            src="/acertinity-logo.png"
            alt="car"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>

        <div className="absolute inset-0 rotate-[10deg] transform">
          <Image
            src="https://assets.aceternity.com/pro/car-1.jpg"
            alt="car"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      </div>
    ),
  },
];
