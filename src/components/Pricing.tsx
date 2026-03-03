

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="pricing"
      className="py-12 md:py-16 px-6 sm:px-12 lg:px-24 max-w-8xl mx-auto"
    >
      <motion.div
        className="space-y-16 md:space-y-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight"
        >
          Create Your Perfect <span className="text-blue-500">Experience</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left text */}
          <motion.div
            variants={fadeLeft}
            className="max-w-2xl text-center lg:text-left space-y-4 mx-auto lg:mx-0"
          >
            <h3 className="text-xl sm:text-4xl md:text-[40px] font-bold leading-tight">
              Choose whatever works best for you
            </h3>

            <p className="text-base  sm:text-lg leading-7 sm:leading-8 text-gray-600">
              Whether you're hosting a free community meetup or selling tickets
              to your next big event, Drifto gives you the flexibility to grow
              on your terms. No subscriptions, no commitments—just simple,
              transparent pricing.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            variants={container}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-stretch overflow-visible"
          >
            {/* Free */}
            <motion.div
              variants={fadeUp}
              className="max-w-xs sm:max-w-none w-full border border-gray-200 text-center rounded-3xl flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="border-b border-gray-200 p-8 space-y-3">
                <h4 className="text-2xl font-bold">Free Events</h4>
                <p className="text-gray-600 leading-relaxed">
                  Everything you need to start hosting and joining experiences
                  today
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  Free
                  <span className="text-base font-normal text-gray-500">
                    /no charges
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4 px-8 pt-8 flex-1">
                <FeatureItem>No hidden fees or setup costs</FeatureItem>
                <FeatureItem>
                  Book and join free events instantly
                </FeatureItem>
                <FeatureItem>
                  Create and share events at no cost
                </FeatureItem>
              </div>

              <div className="p-8">
                <a
                  href={import.meta.env.VITE_DRIFTO_WEBAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-4 font-semibold text-lg rounded-xl w-full block hover:bg-blue-700 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>

            {/* Paid */}
            <motion.div
              variants={fadeUp}
              className="max-w-xs sm:max-w-none w-full text-center rounded-3xl flex flex-col hover:shadow-2xl transition-shadow duration-300 bg-blue-600 text-white relative lg:scale-105 ring-2 ring-blue-400/50"
            >
              {/* Most Popular badge */}
              {/* <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-lg">
                  Most Popular
                </span>
              </div> */}

              <div className="border-b border-blue-400/30 p-8 pt-10 space-y-3">
                <h4 className="text-2xl font-bold">Paid Events</h4>
                <p className="leading-relaxed text-blue-100">
                  Everything in Free, plus the power to sell your experiences.
                </p>
                <p className="text-3xl font-bold">
                  4.5% + ₦100
                  <span className="text-base font-normal text-blue-200">/per ticket</span>
                </p>
              </div>

              <div className="flex flex-col gap-4 px-8 pt-8 flex-1">
                <FeatureItem variant="light">₦100 service fee for tickets above ₦1500</FeatureItem>
                <FeatureItem variant="light">Sell unlimited tickets, anytime</FeatureItem>
                <FeatureItem variant="light">Fast ticketing with mobile device scanning</FeatureItem>
              </div>

              <div className="p-8">
                <a
                  href={import.meta.env.VITE_DRIFTO_WEBAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-4 font-semibold text-lg rounded-xl w-full block hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureItem({
  children,
  variant = "dark",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3 text-left">
      <Check
        className={`w-5 h-5 shrink-0 ${variant === "light" ? "text-blue-200" : "text-blue-500"
          }`}
      />
      <span className={variant === "light" ? "text-blue-50" : "text-gray-700"}>
        {children}
      </span>
    </div>
  );
}
