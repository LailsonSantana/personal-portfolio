'use client'

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Initial from "@/components/sections/Initial";
import Knowledge from "@/components/sections/Knowledge";
import Projects from "@/components/sections/Projects";
import Template from "@/components/Template";

export default function Home() {
  return (
    <main>
      <Template>
        <Initial />
        <About />
        <Knowledge />
        <Projects />
        <Contact />
      </Template>
    </main>
  );
}
