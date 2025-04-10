import { ReactNode } from "react";

interface ContainerCodeProps{
    children : ReactNode
}

const ContainerCode: React.FC<ContainerCodeProps> = ({children} : ContainerCodeProps) => {
    return(
        <div className="container bg-[#010F22] flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-2xl 
        w-4/5 h-11/12 m-16 font-light text:sm lg:text-lg text-white justify-between
        transform hover:scale-105 transition-all duration-300 ease-in-out">
            {children}
        </div>
    )
}

export default ContainerCode;