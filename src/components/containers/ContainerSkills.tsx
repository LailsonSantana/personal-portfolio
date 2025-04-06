interface ContainerSkillsProps{
    children: React.ReactNode
}

const ContainerSkills: React.FC<ContainerSkillsProps> = ({children}) => {
    return(
        <div className="container flex-col border-solid border-2 rounded-2xl p-4">
            {children}
        </div>
    )
}

export default ContainerSkills;