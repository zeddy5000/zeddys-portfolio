"use client";

import { Container, Section } from "@/components/layout";
import SectionHeading from "@/components/common/section-heading";

import Timeline from "./Timeline";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>

        <SectionHeading
          eyebrow="Career Journey"
          title="Professional Experience"
          description="A timeline of my software engineering journey building enterprise applications, modern web platforms and scalable backend systems."
        />

        <Timeline />

      </Container>
    </Section>
  );
}