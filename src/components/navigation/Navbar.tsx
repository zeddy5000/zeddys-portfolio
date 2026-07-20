"use client";

import { Container } from "../layout"; 

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-6">
      <Container>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-4 backdrop-blur-xl">

          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-4">
            <ResumeButton />

            <MobileNav />
          </div>

        </div>
      </Container>
    </header>
  );
}