interface SectionTitleProps{
    section: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({section}) => {
    return(
        <div className="flex m-auto md:ml-16 ">
            <h1 className="text-5xl font-thin lg:text-7xl text-center">
                {section}
            </h1>
        </div>
    )
}

export default SectionTitle;