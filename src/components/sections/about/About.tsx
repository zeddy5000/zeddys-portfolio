"use client";

import { motion } from "framer-motion";

import { Section, Container } from "@/components/layout";
import SectionHeading from "@/components/common/section-heading";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

import { portfolio } from "@/data/portfolio";
import { fadeIn, staggerContainer } from "@/animations";

export default function About() {
  return (
    <Section id="about">
      <Container>

        <SectionHeading
          eyebrow={portfolio.about.subtitle}
          title={portfolio.about.title}
          description="A passionate software engineer building secure, scalable and user-focused digital products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center"
        >
          <motion.div variants={fadeIn}>
            <AboutContent />
          </motion.div>

          <motion.div variants={fadeIn}>
            <AboutStats />
          </motion.div>

        </motion.div>

      </Container>
    </Section>
  );
}