"use client";

import React, { useEffect } from "react";
import { useAnimate, motion, stagger } from "motion/react";

export const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Welcome to F*** C***. The first rule of F*** C*** is that you don't talk about F*** C***. The second rule of F*** C*** is that you do...";

  // best approach is this tho to use useEffect
  // useEffect(() => {
  //   startAnimating();
  // }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
      {
        duration: 0.4,
        delay: stagger(0.05),
      },
    );
  };

  return (
    <div ref={scope} className="mx-auto max-w-4xl">
      <button
        className="mb-4 cursor-pointer rounded-lg bg-purple-500 p-3 font-bold text-white transition hover:bg-purple-600"
        onClick={() => startAnimating()}
      >
        What is fc?
      </button>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + index}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
          }}
          className="inline-block text-4xl font-bold text-white"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};
