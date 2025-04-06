import SectionTitle from "../SectionTitle";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodePresentation from "../CodeBlock";
import DescriptionCode from "../DescriptionCode";

interface AboutProps{

}

const full = 
    `const dev = {
        name: "Lailson",
        age: "25",
        city: "Vitória da Conquista-BA"
        graduation: "Computer Sciente",
        skills: [
            "Java",
            "Spring Boot",
            "React", 
            "Next.js", 
            "TypeScript"
            "Python"
        ],
        languages: [
            "Portguese - Native", 
            "English - Intermediate"
        ]
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
                
                    {/*<h2 className="flex text-2xl font-bold mb-4 justify-center">Breve descrição</h2>*/}
                    
                    <DescriptionCode text={description} />

                
                    <CodePresentation fullCode={full}/>
                
            </div>

            <div className="flex gap-8 p-4 items-center justify-center">
                <a href="https://www.linkedin.com/in/lailson-santana-dev/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" />
                </a>
                <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" />
                </a>
                <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon fontSize="large" />
                </a>
                <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                    <EmailIcon fontSize="large" />
                </a>
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