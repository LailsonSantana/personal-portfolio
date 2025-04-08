import { Check } from "@phosphor-icons/react";
import SectionTitle from "../SectionTitle";
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SchoolIcon from '@mui/icons-material/School';
import DecryptedText from "../teste/Decrypted";

interface InformationProps{

}
// Em busca de novos desafios
// Foco no desenvolvimento contínuo
const Information: React.FC<InformationProps> = () => {
    return(
        <section className="flex flex-col overflow-hidden bg-[#E6E5DE] p-12 text-black">
            <SectionTitle section="Mais Informações"/>

            
                <div className="flex items-center">
                

                <h2 className="font-medium text-4xl">
                    Objetivos 
                </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center border-b-2 p-4 text-black text-2xl font-thin">
                
                    <div className="mt-2">
                        <h2 className="flex font-semibold text-2xl mb-2 gap-2">
                            <TodayIcon fontSize="large" />
                            Curto Prazo
                        </h2>

                        <ul className="space-y-2 text-lg">
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
                        <h2 className="flex font-semibold mb-2 text-2xl gap-2">
                        <DateRangeIcon fontSize="large" />
                            Médio / Longo Prazo
                        </h2>

                        <ul className="space-y-2 text-lg">
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

                <h2 className="font-medium text-4xl mt-4">
                    Cursos
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center border-b-2 p-4 text-black text-2xl font-thin">
                    <div className="mt-2">
                        
                        <h2 className="flex font-semibold mb-2 text-2xl gap-2">
                            <DateRangeIcon fontSize="large" />
                            Finalizados
                        </h2>
                        <ul className="space-y-2 text-lg">
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
                        
                        <h2 className="flex font-semibold mb-2 text-2xl gap-2">
                            <DateRangeIcon fontSize="large" />
                            Em andamento
                        </h2>
                        <ul className="space-y-2 text-lg">
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
                </div>
        </section>
    )
}

export default Information;