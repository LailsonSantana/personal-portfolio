import { Check } from "@phosphor-icons/react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MyButton from "../MyButton";

interface InitialProps{

}
// Em busca de novos desafios
// Foco no desenvolvimento contínuo
const Initial: React.FC<InitialProps> = () => {
    return(
        <section className="grid-cols-1 lg:grid-cols-2 grid place-items-center overflow-hidden bg-[#E6E5DE] p-12 space-x-32 text-black">
            <div>
                <div>
                    <h1 className="text-lg font-bold">
                        
                    </h1>
                    <h1 className="text-4xl font-bold">
                        Hello World
                    </h1>
                    <h1 className="text-lg font-bold">
                        
                    </h1>
                    <h2>
                        Sejam bem vindos 
                    </h2>
                </div>

                <div className="mt-8">
                    <h2 className="font-bold mb-2">
                        Objetivos Curto Prazo
                    </h2>

                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Finalizar e apresentar meu trabalho de conclusão de curso (TCC)
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Ingressar no mercado de trabalho
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Iniciar o aprendizado de microservices no Spring Boot
                        </li>
                    </ul>
                        
                </div>

                <div className="mt-8">
                    <h2 className="font-bold mb-2">
                        Objetivos Médio / Longo Prazo
                    </h2>

                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Pós Graduação em Desenvolvimento Web
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Aprimorar minha capacidade de entender e resolver problemas
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-[#010D26]"/>
                            Lançamento de uma plataforma para ensino e aprendizado da língua inglesa
                        </li>
                    </ul>
                </div>

                
            </div>

            <div className="flex flex-col space-y-8 justify-center">
                <div className="w-60 h-60">
                    <img src="myphoto.jpeg" className="rounded-full border-2 border-solid"/>
                </div>

                <MyButton />
            </div>

              
        </section>
    )
}

export default Initial;