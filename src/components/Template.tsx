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
        <footer className="grid cols-1 md:grid-cols-2 lg: grid-cols-3 gap-8 mb-12 mt-5 bg-[#012030] text-white">
            <div>
                <h3 className="text-2xl font-semibold mb-2">Lailson Santana Dev</h3>
                <p>Texto qualquer</p>
            </div>
        </footer>
    )
}

export default Template;