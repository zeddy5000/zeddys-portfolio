import Container from "../components/layout/container";
import Section from "../components/layout/section";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <h1 className="font-heading text-6xl font-bold">
            Zeddy Isu
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground text-xl">
            Building enterprise software and delightful digital
            experiences.
          </p>
        </Container>
      </Section>
    </main>
  );
}