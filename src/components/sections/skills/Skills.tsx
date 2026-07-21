"use client";

import { Container, Section } from "@/components/layout";
import SectionHeading from "@/components/common/section-heading";

import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>

        <SectionHeading
          eyebrow="Expertise"
          title="Tech Stack"
          description="Technologies I use to build secure, scalable and modern software."
        />

        <SkillsGrid />

      </Container>
    </Section>
  );
}