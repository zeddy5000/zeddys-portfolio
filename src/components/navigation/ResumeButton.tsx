import { Button } from "@/components/ui/button"; 
import { portfolio } from "@/src/data/portfolio";

export default function ResumeButton() {
  return (
    <a
      href={portfolio.resume}
      download
      className="inline-block"
    >
      <Button>
        Download CV
      </Button>
    </a>
  );
}