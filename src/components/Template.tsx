'use client'

import Menu from "./Menu"
import Navbar from "./Navbar"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
        <div >
            <Navbar />
        </div>
    )
}

const Footer: React.FC = () => {
    return(
        <footer className="grid cols-1 md:grid-cols-2 lg: grid-cols-3 gap-8 bg-[#012030] text-white">
            <div className="flex items-center ml-4">
            © 2025 Lailson Santana . All rights reserved.
            </div>

            <div className="flex gap-8 p-4 items-center justify-end mr-4">
                            <a href="https://www.linkedin.com/in/lailson-santana-dev/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon fontSize="large" />
                            </a>
                            <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                                <EmailIcon fontSize="large" />
                            </a>
                        </div>
        </footer>
    )
}

export default Template;