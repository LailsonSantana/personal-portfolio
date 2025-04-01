'use client'

import Menu from "./Menu"

interface TemplateProps{
    children: React.ReactNode
}

const Template: React.FC<TemplateProps> = ({children}) => {
    return(
        <>
            <Header />

            
                {children}
            

            <Footer />
        </>
    )
}

const Header: React.FC = () => {
    return(
        <div className="shadow-lg">
            <Menu/>
        </div>
    )
}

const Footer: React.FC = () => {
    return(
        <>
        </>
    )
}

export default Template;