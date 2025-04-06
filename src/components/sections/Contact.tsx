import SectionTitle from "../SectionTitle";

interface ContactProps{

}

const Contact: React.FC<ContactProps> = () => {
    return(
        <section className="bg-[#1e1e1e] p-4">
            <SectionTitle section="Contatos"/>
        </section>
    )
}

export default Contact;