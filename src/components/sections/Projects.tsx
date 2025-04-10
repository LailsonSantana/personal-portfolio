'use-client'

import SectionTitle from "../SectionTitle";
import useEmblaCarousel from "embla-carousel-react"
import {Calendar, ChevronLeft, ChevronRight,} from "lucide-react"
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WebIcon from '@mui/icons-material/Web';
import QuizIcon from '@mui/icons-material/Quiz';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CasinoIcon from '@mui/icons-material/Casino';

const items = [

    {
        project : "Portifólio Pessoal",
        description : "Uma landing page para inclusão de informações profissionais , um portifílio online",
        link: "",
        icon: <WebIcon fontSize="large" className="text-white" />,
        finishedDate: "Em andamento",
        image: "port.png"

    },
    {
        project: "Question Hub",
        description: "Uma plataforma educativa online para criação de questões, criada como trabalho de conclusão de curso(TCC)",
        link: "https://github.com/LailsonSantana/question_hub.",
        icon: <QuizIcon fontSize="large" className="text-white" />,
        finishedDate: "20/04/2025",
        image: "questionhub.png"
    },
    {
        project : "Fluxograma Interativo",
        description : "Um fluxograma interativo para verificação de disciplinas e pré requisitos do curso de Ciência da Computação - UESB.",
        link: "https://github.com/LailsonSantana/interactive-flowchart",
        icon: <AccountTreeIcon fontSize="large" className="text-white" />,
        finishedDate: "01/03/2025",
        image: "flux.png"
    },
    {
        project : "Jogo de Apostas",
        description : "Um jogo construído com o objetivo de aplicar o conceito de threads em java.",
        link: "https://github.com/LailsonSantana/Programacao_Concorrente/tree/main/pc_trabalho05_201911924",
        icon: <CasinoIcon fontSize="large" className="text-white" />,
        finishedDate: "23/05/2021",
        image: "front.png"
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
        <section id="projects" className="bg-[#010F22] p-2 lg:p-4 text-white flex flex-col">
            <SectionTitle section="Projetos"/>
            <div className="relative mt-12 mx-12">
            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                            <article className="bg-[#010421] text-white rounded-2xl p-6 gap-6 h-full flex flex-col border border-gray-700 justify-between">
                                <div className=" flex items-start justify-between">
                                    <div className="flex gap-3">
                                        <span className="text-3xl">
                                            {item.icon}
                                        </span>
                                        <div>
                                            
                                            <h3 className="font-bold text-xl my-1 mb-4" >
                                                {item.project}
                                            </h3>
                                            <p className="text-gray-400 select-none">{item.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-md flex items-center justify-center px-2">
                                    <img src={item.image} className="rounded-md shadow-3xl max-w-full max-h-60 object-contain border border-gray-900"/>
                                </div>

                                <div className="border-t border-gray-700 pt-4 flex items-center justify-between" >
                                    <div className="flex items-center gap-2 text-sm ">
                                        <Calendar className="w-4 h-4" />
                                        <span>Data de conclusão : {item.finishedDate}</span>
                                    </div>

                                    <a href={item.link} className="flex items-center justify-center px-4 py-1 rounded-md">
                                        <GitHubIcon fontSize="small" />
                                        <span className="ml-2">Visualizar</span>
                                    </a>
                                </div>
                            </article>
                        </div> 
                    ))}
                </div>
            </div>
            
            <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' 
                    onClick={scrollPrev}>
                <ChevronLeft 
                className="w-6 h-6 text-gray-600 " />
                
            </button>

            <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10' 
                    onClick={scrollNext}>   
                <ChevronRight 
                className="w-6 h-6 text-gray-600 " />
                
            </button>
            </div>


        </section>
    )
}

export default Project;