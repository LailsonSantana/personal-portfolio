import SectionTitle from "../SectionTitle";

interface ProjectProps{

}

const Project: React.FC<ProjectProps> = () => {
    return(
        <section className="bg-[#455D73] p-4">
            <SectionTitle section="Projetos"/>
        </section>
    )
}

export default Project;