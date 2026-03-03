import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroPane1, heroPane2, heroPane3, heroPane4, smallImagePane } from "@/assets";
import StoreButtons from "@/components/StoreButtons";

type Props = {};

export default function HeroComponent({ }: Props) {
  return (
    <section id="hero" className="w-full bg-white mt-9 md:mt-0">
      <div className="px-4 sm:px-3 pb-16 md:px-8 md:py-26">
        <div className="flex flex-col sm:flex-row lg:grid lg:items-start gap-6 lg:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="space-y-3 md:space-y-6 max-w-2xl lg:pt-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-12 lg:leading-14 text-gray-900">
                <span className="whitespace-nowrap">One Platform for</span>
                <br />
                <span className="whitespace-nowrap text-blue-600">Every Experience.</span>
              </h1>
              <p className="max-w-lg text-sm md:text-xl leading-tight md:text-xl text-gray-600">
                Drifto is the simplest way to discover and book unique
                experiences, from hidden-gem parties to can't-miss
                conferences. Stop searching, start doing.
              </p>
              {/* Right Visual – Mobile: single image */}
              <div className="flex items-center my-10 justify-center sm:hidden w-full max-w-[650px]">
                <motion.img
                  className="w-full aspect-[1.5/1] rounded-xl object-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={smallImagePane}
                  alt="Drifto experience"
                />
              </div>
              <div className="w-full md:block space-y-4 md:space-y-6 lg:pr-15">
                <div className="flex flex-wrap items-center gap-4 w-full">
                  <button
                    onClick={() => window.open(import.meta.env.VITE_DRIFTO_WEBAPP_URL, "_blank")}
                    className="rounded-lg bg-blue-600 w-full px-6 py-3 md:py-4 text-center text-white text-sm md:text-lg font-bold transition hover:bg-blue-400 cursor-pointer"
                  >
                    Get Started
                  </button>
                </div>
                <StoreButtons className="justify-between" />

                {/* Social Proof */}
                {/* <motion.div
                  className="flex items-center gap-3 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="flex -space-x-2.5">
                    {["Felix", "Aneka", "Leo", "Zara", "Milo"].map((name, i) => (
                      <img
                        key={name}
                        src={`https://api.dicebear.com/9.x/notionists/svg?seed=${name}`}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 object-cover"
                        style={{ zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">200+</span> users already on Drifto
                  </p>
                </motion.div> */}
              </div>
            </div>
          </motion.div>



          {/* Right Visual – Tablet & Desktop: multi-image */}
          <div className="hidden sm:flex justify-center md:justify-end relative md:bottom-16">
            <motion.img
              className="w-1/2 lg:w-1/4 relative"
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: 1
              }}
              transition={{
                y: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0,
                },
                opacity: { duration: 0.5, ease: "easeOut" }
              }}
              src={heroPane1}
            ></motion.img>{" "}
            <motion.img
              className="w-1/2  lg:w-1/4 relative top-8 md:top-16"
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: [0, 14, 0],
                opacity: 1
              }}
              transition={{
                y: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.6,
                },
                opacity: { duration: 0.5, ease: "easeOut" }
              }}
              src={heroPane2}
            ></motion.img>{" "}
            <motion.img
              className="w-16 hidden lg:block lg:w-1/4"
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: [0, -8, 0],
                opacity: 1
              }}
              transition={{
                y: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.2,
                },
                opacity: { duration: 0.5, ease: "easeOut" }
              }}
              src={heroPane3}
            ></motion.img>{" "}
            <motion.img
              className="w-1/2 lg:w-1/4 hidden lg:block relative top-16"
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: [0, 12, 0],
                opacity: 1
              }}
              transition={{
                y: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.8,
                },
                opacity: { duration: 0.5, ease: "easeOut" }
              }}
              src={heroPane4}
            ></motion.img>
          </div>
        </div>
      </div>
    </section>
  );
}
