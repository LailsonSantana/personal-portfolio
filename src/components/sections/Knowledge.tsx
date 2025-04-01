import SectionTitle from "../SectionTitle";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface KnowledgeProps{

}

const Knowledge: React.FC<KnowledgeProps> = () => {
    return(
        <section className="bg-[#A9C6D9] p-4">
            <SectionTitle section="Conhecimentos"/>
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 font-bold text-lg">
                <div className="flex flex-col items-center gap-1">
                    <DeveloperModeIcon fontSize="large" />
                    <span>Frontend</span>
                    <ul>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>React</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Tailwind</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>CSS</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>HTML</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <StorageIcon fontSize="large"/>
                    <span>Backend</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Java</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Spring</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Python</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <StorageIcon fontSize="large"/>
                    <span>DevOps</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Git</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Docker</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <SchoolIcon fontSize="large" />
                    Cursos
                    <ul>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Inglês</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" className="text-blue-500" />
                            <span>Spring</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Knowledge;