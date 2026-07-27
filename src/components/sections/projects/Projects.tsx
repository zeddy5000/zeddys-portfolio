"use client";

import { Container, Section } from "@/components/layout";
import SectionHeading from "@/components/common/section-heading";

import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>

        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A collection of enterprise software, web applications and automation solutions that demonstrate my experience building scalable systems."
        />

        <ProjectsGrid />

      </Container>
    </Section>
  );
}