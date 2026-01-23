"use client"
import { useState } from "react";
import estilos from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import Gif from "../../../public/gif3.gif";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md"; {/*<MdOutlineMenu />*/ }
import { IoMdClose } from "react-icons/io"; {/*<IoMdClose />*/ }
import MenuMobile from "./menuMobile/index";
import ThemeToggle from "../themeToggle/themeToggle";

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    function abrirMenu() {
        setMenuOpen(prev => !prev);
    }
    return (
        <>
            <header className={estilos.menu}>
                <video
                    className={estilos.videoLogo}
                    src="/video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <nav className={estilos.listaNav}>
                    <ul className={estilos.listaMenu}>
                        <li>
                            <Link href="/" className={estilos.link} aria-label="Ir para página principal" rel="noopener noreferrer">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={estilos.link} aria-label="Ir para página principal" rel="noopener noreferrer">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link href="/mySkills" className={estilos.link} aria-label="Ir para minhas Habilidades" rel="noopener noreferrer">
                                My Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="/projectss" className={estilos.link} aria-label="Ir para meus projetos" rel="noopener noreferrer">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/training" className={estilos.link} aria-label="Ir para minha formação" rel="noopener noreferrer">
                                Training
                            </Link>
                        </li>
                    </ul>

                    <div className={estilos.iconesPerfil}>
                        <a href="https://www.linkedin.com/in/gabrieldeveloperweb/" target="_blank" rel="noopener noreferrer" title="Ir para Linkedin" aria-label="Ir para linkedin">
                            <GrLinkedinOption className={estilos.icones1} />
                        </a>

                        <ThemeToggle/>

                        <a href="https://github.com/GabrielFR-Dev" target="_blank" rel="noopener noreferrer" title="Ir para GitHub" aria-label="Ir para GitHub">
                            <IoLogoGithub className={estilos.icones2} />
                        </a>
                    </div>
                </nav>
            </header>
            
            {/*Menu Mobile */}
            <div className={estilos.menuMobile}>
                <ThemeToggle className={estilos.botaoTrocarTemaMobile}/>
                <button className={estilos.botaoMobile} onClick={abrirMenu}>
                    {menuOpen ? <IoMdClose /> : <MdOutlineMenu />}
                </button>
                {menuOpen && (<MenuMobile fecharMenu={abrirMenu} />)}
            </div>
        </>
    )
}