import { Background, Container, Section } from "../components/layout";

import Button from "../components/ui/button";
import GlassCard from "../components/ui/card";

import SectionHeading from "../components/common/section-heading";

export default function Home() {
  return (
    <>
      <Background />

      <main className="relative">
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Welcome"
              title="Building Digital Experiences."
              description="Enterprise software engineer passionate about building modern web applications."
            />

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                View Projects
              </Button>

              <Button variant="outline">
                Download Resume
              </Button>
            </div>

            <GlassCard className="mt-16 p-10">
              <h3 className="font-heading text-3xl font-semibold">
                Glass Card
              </h3>

              <p className="mt-4 text-slate-400">
                Every card in this portfolio will inherit this style.
              </p>
            </GlassCard>
          </Container>
        </Section>
      </main>
    </>
  );
}