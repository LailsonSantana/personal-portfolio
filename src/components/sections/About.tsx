import SectionTitle from "../SectionTitle";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ReactPlayer from 'react-player';
import VideoPlayer from "../YoutubeVideo";
import { Typography } from "@mui/material";
import { CodeBlock } from "@phosphor-icons/react";
import CodePresentation from "../CodeBlock";

interface AboutProps{

}

const full = 
    `const dev = {
        name: "Lailson",
        profissão: "Desenvolvedor Front-end",
        skills: [
            "Java",
            "Spring Boot",
            "React", 
            "Next.js", 
            "TypeScript"
            "Python"
        ],
        graduation: "Computer Sciente",
        college: "UESB"
    };`

const description = `Iniciei minha caminhada na área da programação um pouco antes de ingressar no curso
                                de Ciência da Computação em 2019, desde então, tive certeza de que aquele era o caminho
                                que eu gostaria de trilhar. Os desafios e projetos são o que me impulsionam na área
                                de desenvolvimento de software, minha capacidade de contornar condições adversas  e meu
                                desejo de constante aprimoramento são minhas principais qualidades.`


const About: React.FC<AboutProps> = () => {
    return(
        <section className="bg-[#E6E5DE] p-4">
            <SectionTitle section="Sobre"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div className="w-full h-full p-12 flex flex-col items-center">
                    <h2 className="flex text-2xl font-bold mb-4 justify-center">Breve descrição</h2>
                    <CodePresentation fullCode={description}></CodePresentation>
                    <p className="text-center mx-16">
                                Iniciei minha caminhada na área da programação um pouco antes de ingressar no curso
                                de Ciência da Computação em 2019, desde então, tive certeza de que aquele era o caminho
                                que eu gostaria de trilhar. Os desafios e projetos são o que me impulsionam na área
                                de desenvolvimento de software, minha capacidade de contornar condições adversas  e meu
                                desejo de constante aprimoramento são minhas principais qualidades.
                                
                    </p>
                    <div className="flex gap-8 p-4">
                        <a href="https://www.linkedin.com/in/lailson-santana-dev/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon fontSize="large" />
                        </a>
                        <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                            <EmailIcon fontSize="large" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col">
                    <CodePresentation fullCode={full}/>
                </div>
            </div>
            
            {/*<div className="container grid grid-cols-1 mt-4 place-items-center">
                
                <div>
                    <h2 className="flex text-2xl font-bold justify-center mb-2">Vídeo de Apresentação</h2>
                    <VideoPlayer />
                </div>
                
            </div>*/}
        </section>
    )
}

export default About;