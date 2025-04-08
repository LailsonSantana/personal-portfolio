interface SectionTitleProps{
    section: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({section}) => {
    return(
        <div className="flex justify-center">
            <h1 className="text-5xl font-thin lg:text-7xl">
                {section}
            </h1>
        </div>
    )
}

export default SectionTitle;