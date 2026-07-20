import { Container, Section } from "../../layout";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}