'use client'

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Initial from "@/components/sections/Initial";
import Knowledge from "@/components/sections/Knowledge";
import Projects from "@/components/sections/Projects";
import Teste from "@/components/sections/Teste";
import Template from "@/components/Template";


export default function Home() {
  return (
    
      <main>
        <Template>
            <Teste />
            <About />
            <Projects />
            <Initial />
            <Knowledge />
            <Contact />
        </Template>
      </main>
    
  );
}
