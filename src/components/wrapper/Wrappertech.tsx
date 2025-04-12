interface WrappertechProps{
    children: React.ReactNode
}

const Wrappertech: React.FC<WrappertechProps> = ({children}) => {
    return(
        <li className="flex rounded-3xl bg-[#080121] border border-gray-700 p-2 px-4 justify-center">
            {children}
        </li>
    )
}

export default Wrappertech;