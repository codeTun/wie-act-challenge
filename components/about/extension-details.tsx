"use client";

import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Protects privacy and security",
  "Fosters safe online communities",
  "Empowers users with AI-driven solutions",
  "Prevents online abuse and harassment",
  "Encourages freedom of expression",
  "Supports diverse participation in digital spaces",
];

const ExtensionDetails = () => {
  return (
    <div className="relative isolate -z-10 bg-gray-900">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gradient-to-r from-purple-800 to-pink-600 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <Image
            fetchPriority="high"
            quality={100}
            priority={true}
            height={500}
            width={500}
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="/feedbacks.jpg" // Update this with the relevant image
            alt="Reasons picture."
          />
          <div className="w-full flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Reasons to focus on Online Harassment
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We chose to focus on online harassment because it is one of the most critical challenges faced by individuals, particularly women, in today&apos;s digital world.
            </p>
            <ul
              role="list"
              className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
            >
              {benefits.map((benefitKey) => (
                <li key={benefitKey} className="flex gap-x-3">
                  <CheckCircleIcon
                    className="h-7 w-5 flex-none"
                    aria-hidden="true"
                  />
                  {benefitKey}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
  );
};

export default ExtensionDetails;
