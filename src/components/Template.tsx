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
        <div className="border-y-2 border-orange-700">
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