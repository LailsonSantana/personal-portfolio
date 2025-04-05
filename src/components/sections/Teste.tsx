import { Box, Button, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


interface TesteProps{

}

const Teste: React.FC<TesteProps> = () => {
    return(
        <div className="flex flex-col bg-[#010F22] w-screen h-screen border-white border-t-2">
            <section className="flex items-center justify-center m-auto">

                <div className="w-70 h-70">
                    <img src="myphoto.jpeg" className="rounded-full border-2 border-solid border-white"/>
                </div>

                <div className="flex flex-col items-center p-8 text-white">
                    
                    <Typography className="text-white" variant="h1" textAlign="center">Lailson Santana</Typography>
                    <Typography className="text-white" variant="h2" textAlign="center">Desenvolvedor Backend</Typography>
                    
                    <div className="flex gap-4 mt-4">
                        <Button variant="outlined" 
                        sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray.300' } }}
                        className="flex gap-1 items-center justify-center text-white">
                            <DownloadIcon/>
                            <span>Download CV</span>
                        </Button>

                        <Button variant="outlined"
                        sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'gray.300' } }}
                        className="flex gap-1 m-auto bg-transparent text-white">
                            <EmailIcon/>
                            <span>Entre em contato</span>
                        </Button>
                    </div>
                </div>
            </section>

            <div className="flex flex-col p-8 items-end">
                <Typography className="text-white text-md"  textAlign="center">"A motivação te faz dar o primeiro passo,</Typography>
                <Typography className="text-white text-md"  textAlign="center">e a disciplina te leva a continuar e obter sucesso naquilo que você iniciou"</Typography>
            </div>
        </div>

    )
}

export default Teste;