import SectionTitle from "../SectionTitle";
import CodePresentation from "../CodeBlock";
import DescriptionCode from "../DescriptionCode";
import InfiniteScroll from "../teste/Rolagem";
import FlowingMenu from "../teste/FlowingMenu";

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
        <section className="bg-[#F2F2F2] p-4 text-black">
            <SectionTitle section="Sobre"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                
                    {/*<h2 className="flex text-2xl font-bold mb-4 justify-center">Breve descrição</h2>*/}
                    
                    <DescriptionCode text={description} />

                
                    <CodePresentation fullCode={full}/>
                
            </div>

            

            <InfiniteScroll />
                    

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