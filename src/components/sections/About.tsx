import SectionTitle from "../SectionTitle";
import ReactPlayer from 'react-player';
import VideoPlayer from "../YoutubeVideo";

interface AboutProps{

}

const About: React.FC<AboutProps> = () => {
    return(
        <section className="bg-[#45C4B0] p-4">
            <SectionTitle section="Sobre"/>
            <div className="container grid grid-cols-1 lg:grid-cols-2 mt-4 place-items-center">
                
                <div>
                    <h2 className="flex text-2xl font-bold justify-center mb-2">Vídeo de Apresentação</h2>
                    <VideoPlayer />
                </div>
                

                <div className="w-120 h-80 ">
                <h2 className="flex text-2xl font-bold mb-4 justify-center">Breve descrição</h2>
                    <p className="text-justify">
                        Natural de Brumado, mas atualmente morando em Vitória da Conquista-BA, Lailson 
                        iniciou sua caminhada na área da programação um pouco antes de ingressar na faculdade
                        de Ciência da Computação em 2019, desde então teve a certeza de que aquilo é o que queria 
                        para sua vida. Os desafios e projetos menos comuns são as coisas que mais o motivam na área
                        de desenvolvimento de software, sua capacidade de contornar condições adversas e desejo de 
                        aprimoramento contínuo são seus principais pontos fortes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;