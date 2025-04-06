interface SectionTitleProps{
    section: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({section}) => {
    return(
        <div className="flex justify-center">
            <h1 className="text-6xl font-bold">
                {section}
            </h1>
        </div>
    )
}

export default SectionTitle;