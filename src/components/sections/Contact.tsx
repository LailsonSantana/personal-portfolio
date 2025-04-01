import SectionTitle from "../SectionTitle";

interface ContactProps{

}

const Contact: React.FC<ContactProps> = () => {
    return(
        <section className="bg-[#84A9BF] p-4">
            <SectionTitle section="Contatos"/>
        </section>
    )
}

export default Contact;