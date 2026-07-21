"use client";

import { motion } from "framer-motion";

import { Container, Section } from "../../layout"; 
import { staggerContainer } from "@/animations"; 

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          <HeroContent />

          <HeroImage />
        </motion.div>
      </Container>
    </Section>
  );
}