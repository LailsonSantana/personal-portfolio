import SectionTitle from "../SectionTitle";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

interface KnowledgeProps{

}

const Knowledge: React.FC<KnowledgeProps> = () => {
    return(
        <section className="bg-[#13678A] p-4 text-white">
            <SectionTitle section="Conhecimentos"/>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 font-bold text-lg text-[#DAFDBA]">
                <div className="flex flex-col items-center gap-1 ">
                    <DeveloperModeIcon fontSize="large" />
                    <span>Frontend</span>
                    
                    <ul>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>React</span>
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

                <div className="flex flex-col items-center gap-1">
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
                </div>

                <div className="flex flex-col items-center gap-1">
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
                </div>

                <div className="flex flex-col items-center gap-1">
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
                </div>
            </div>
        </section>
    )
}

export default Knowledge;