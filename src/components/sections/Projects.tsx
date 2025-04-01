'use-client'

import { WhatsappLogo } from "@phosphor-icons/react";
import SectionTitle from "../SectionTitle";
import useEmblaCarousel from "embla-carousel-react"
import {Calendar, ChevronLeft, ChevronRight} from "lucide-react"

const items = [

    {
        project : "Portifólio Pessoal",
        description : "Uma landing page para inclusão de informações profissionais , um portifílio online",
        link: "",
        finishedDate: "Em andamento"
    },
    {
        project: "Question Hub",
        description: "Uma plataforma educativa online para criação de questões, criada como trabalho de conclusão de curso(TCC)",
        link: "",
        finishedDate: "20/04/2025"
    },
    {
        project : "Fluxograma Interativo",
        description : "Um fluxograma interativo para verificação de disciplinas e pré requisitos",
        link: "",
        finishedDate: "01/03/2025"
    },
    
]

interface ProjectProps{

}

const Project: React.FC<ProjectProps> = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1, 
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }
    return(
        <section className="bg-[#45C4B0] p-4">
            <SectionTitle section="Projetos"/>
            <div className="overflow-hidden mt-6" ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                            <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                <div className="flex-1 flex itms-start justify-between">
                                    <div className="flex gap-3">
                                        <span className="text-3xl"></span>
                                        <div>
                                            <h3 className="font-bold text-xl my-1" >
                                                {item.project}
                                            </h3>
                                            <p className="text-gray-400 select-none">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-700 pt-4 flex items-center justify-between" >
                                    <div className="flex items-center gap-2 text-sm ">
                                        <Calendar className="w-4 h-4" />
                                        <span>Finalizado em: {item.finishedDate}</span>
                                    </div>

                                    <a href="#" className="flex items-center justify-center px-4 py-1 rounded-md">
                                        <WhatsappLogo className="w-5 h-5"/>
                                        Ver mais
                                    </a>
                                </div>
                            </article>
                        </div> 
                    ))}
                </div>
            </div>

            <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/3" 
                    onClick={scrollPrev}>
                <ChevronLeft 
                className="w-6 h-6 text-gray-600 " />
                
            </button>


        </section>
    )
}

export default Project;