
import { Box, Button, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


interface TesteProps{

}

const Teste: React.FC<TesteProps> = () => {
    return(
        <div className="flex flex-col bg-[#010F22] w-screen h-screen border-white border-t-2">
            <section className="grid grid-cols-1 lg:flex items-center justify-center m-auto place-items-center">

                <div className="w-50 h-50 lg:w-70 lg:h-70 p-4">
                    <img src="myphoto.jpeg" className="rounded-full border-2 border-solid border-white"/>
                </div>

                <div className="flex flex-col items-center p-2 text-white justify-center">
                    
                <h1 className="text-white text-center text-5xl font-thin lg:text-8xl">Lailson Santana</h1>
                <h2 className="text-white text-center text-3xl font-thin lg:text-6xl">Desenvolvedor Backend</h2>
                    
                    
                    <div className="flex gap-4 mt-4 p-4">
                        <Button variant="outlined" size="small"
                        sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray.300' } }}
                        className="flex gap-1 m-auto text-white lg:w-full">
                            <DownloadIcon fontSize="small"/>
                            <span>Download CV</span>
                        </Button>

                        <Button variant="outlined" size="small"
                        sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray.300' } }}
                        className="flex gap-1 m-auto text-white lg:w-full">
                            <EmailIcon fontSize="small"/>
                            <span>Entre em contato</span>
                        </Button>
                    </div>
                </div>
            </section>

            <div className="flex flex-col p-8 items-end">
                <div className="flex flex-col">
                    <h1 className="text-white text-center text-sm lg:text-lg font-thin">"A motivação te faz dar o primeiro passo,</h1>
                    <h1 className="text-white text-center text-sm lg:text-lg font-thin">e a disciplina te leva a continuar e obter sucesso naquilo que você iniciou"</h1>
                </div>
            </div>
        </div>

    )
}

export default Teste;
