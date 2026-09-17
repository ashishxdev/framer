"use client";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export function MotionHooksExample() {
  // prettierrc - automatically sorts classes after saving file

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="grid grid-cols-2 items-center gap-20 py-40"
          >
            <div className="flex flex-col gap-5">
              {feature.icon}
              <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
              <p className="text-lg text-neutral-400">{feature.description}</p>
            </div>

            <div>{feature.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
