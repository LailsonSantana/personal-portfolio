import SectionTitle from "../SectionTitle";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ContainerSkills from "../containers/ContainerSkills";
import InfiniteScroll from "../teste/Rolagem";

interface SkillsProps{

}

const Skills: React.FC<SkillsProps> = () => {
    return(
        <section id="skills" className="bg-[#010F22] p-4 pt-16 text-white flex flex-col">
            <SectionTitle section="Habilidades"/>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 place-items-center mt-12 font-thin text-lg">
                <div>
                    <h1 className="mb-2 font-semibold">Backend</h1>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Python</li>
                </div>
                <div>
                    <h1 className="mb-2 font-semibold">Frontend</h1>
                    <li>HTML e CSS</li>
                    <li>React</li>
                    <li>Tailwind</li>
                </div>
                <div>
                    <h1 className="mb-2 font-semibold">DevOps</h1>
                    <li>Git e Github</li>
                    <li>Postgre SQL</li>
                    <li>Docker</li>
                </div>
                <div>
                    <h1 className="mb-2 font-semibold">Outros</h1>
                    <li>WordPress</li>
                    <li>Excel</li>
                    <li>Docker</li>
                </div>
            </div>

            <div className="mt-8 ">
                <InfiniteScroll />
            </div>
            
            {/* 
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 font-bold text-lg text-[#DAFDBA] gap-4">
                <ContainerSkills>
                    <DeveloperModeIcon fontSize="large" />
                    <span>Frontend</span>
                    
                    <div className="flex flex-col items-center justify-center">
                    <div className="w-70 h-70">
                    <img src="front.png" className="opacity-10"/>
                    </div>
                    <ul className="flex mt-4">
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">React</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Tailwind</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>CSS</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>HTML</span>
                        </li>
                    </ul>
                    </div>
                </ContainerSkills>

                <ContainerSkills>
                    <StorageIcon fontSize="large"/>
                    <span>Backend</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Java</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Spring</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Python</span>
                        </li>
                    </ul>
                </ContainerSkills>

                <ContainerSkills>
                    <SettingsApplicationsIcon fontSize="large"  />
                    <span>DevOps</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Git</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Docker</span>
                        </li>
                    </ul>
                </ContainerSkills>

                <ContainerSkills>
                    <SchoolIcon fontSize="large" />
                    <span>Cursos</span>
                    <ul>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large"  />
                            <span>Inglês</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Spring</span>
                        </li>
                    </ul>
                </ContainerSkills>
            </div>
            */}
        </section>
    )
}

export default Skills;