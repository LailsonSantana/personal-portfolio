'use client'

import About from "@/components/sections/About";
import Initial from "@/components/sections/Informations";
import Knowledge from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Teste from "@/components/sections/Home";
import Template from "@/components/Template";
import Skills from "@/components/sections/Skills";
import Information from "@/components/sections/Informations";


export default function Home() {
  return (
    
      <main>
        <Template>
            <Teste />
            <About />
            <Projects />
            <Skills />
            <Information />
        </Template>
      </main>
    
  );
}
