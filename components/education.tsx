"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import universityLogo from "@/public/university.jpeg";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <Image src={universityLogo} alt="Antioch" width="700" />
        </div>

        <div>
          <p className="text-xl font-medium">
            <b>
              Bachelor's degree in Computer Science
            </b>
          </p>
          <p className="mt-5">Studied at <b>Antioch University</b> from <b>Sep 2013</b> to <b>Sep 2016</b>, focusing on <b>programming, systems design</b>, and <b>software development</b> while actively participating in <b>sports</b>, developing <b>teamwork, discipline</b>, and <b>leadership</b> skills alongside academics</p>
        </div>
      </div>
    </motion.section>
  );
}
