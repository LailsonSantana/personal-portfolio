'use client'

import React from 'react';

interface MenuProps{

}

const Menu: React.FC<MenuProps> = () => {
    return (
        
        <nav className="bg-[#dce0eb] dark:border-gray-600 dark:bg-dark-backgroundHeaderAndFooter shadow-2xl">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">

                <div className='flex flex-col text-white'>
                    <div className='font-bold text-3xl'>
                        Lailson Santana
                    </div>
                    <div className='text-md'>
                        Desenvolvedor Backend
                    </div>
                </div>
                

                <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="transition-transform duration-200 hover:scale-110">
                            {/*fazer o componente aumentar um pouco ao posicionaro mouse em cima*/}
                            <a href="/inicial"
                            className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-containerColor
                             md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">
                                Inicial
                            </a>
                        </li>

                        <li className="transition-transform duration-200 hover:scale-110">
                            <a href="/sobre"
                            className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-containerColor md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">
                                Sobre
                            </a>
                        </li>

                        <li className="transition-transform duration-200 hover:scale-110">
                            <a href="/questoes"
                            className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-containerColor md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">
                                Projetos
                            </a>
                        </li>

                        <li className="transition-transform duration-200 hover:scale-110">
                            <a href="/ajuda"
                            className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-containerColor md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">
                                Conhecimentos
                            </a>
                        </li>

                        <li className="transition-transform duration-200 hover:scale-110">
                            <a href="/contato"
                            className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-containerColor md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
  
export default Menu;