import { Button } from "../ui"; 
import { portfolio } from "@/data/portfolio";

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