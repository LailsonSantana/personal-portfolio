interface ContainerProps{
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <section className="container p-4">
            {children}
        </section>
    )
}

export default Container;