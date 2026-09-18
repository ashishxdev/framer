"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },

  // The screenshot shows additional cards here,
  // but their complete code is not visible in the provided screenshots.

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },

  // More cards appear here in the screenshots,
  // but their complete definitions are not visible.

  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Awarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Awarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

export const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);

  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="relative min-h-screen bg-gray-100 py-10">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}

      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-[500px] w-72 rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="aspect-square w-full rounded-2xl"
          />

          <div className="flex flex-col items-start justify-between">
            <div className="flex w-full items-start justify-between gap-2 py-4">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>

                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="h-40 overflow-auto"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}

      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />

              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>

                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-[10px] text-neutral-500"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
