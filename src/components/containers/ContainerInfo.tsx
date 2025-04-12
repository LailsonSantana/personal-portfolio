import { ReactNode } from "react";

interface ContainerInfoProps{
    children : ReactNode
}

const ContainerInfo: React.FC<ContainerInfoProps> = ({children} : ContainerInfoProps) => {
    return(
        <div className="container flex flex-col justify-evenly bg-[#010421] p-4 rounded-xl shadow-md border border-gray-700 text-white">
            {children}
        </div>
    )
}

export default ContainerInfo;