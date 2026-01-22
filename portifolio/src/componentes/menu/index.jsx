"use client"
import estilos from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import Gif from "../../../public/gif3.gif";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";




export default function Menu() {
    return (
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
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/habilidades" className={estilos.link} aria-label="Ir para minhas Habilidades" rel="noopener noreferrer">
                            My Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos" className={estilos.link} aria-label="Ir para meus projetos" rel="noopener noreferrer">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/formacao" className={estilos.link} aria-label="Ir para minha formação" rel="noopener noreferrer">
                            Training
                        </Link>
                    </li>
                </ul>

                <div className={estilos.iconesPerfil}>
                    <a href="https://www.linkedin.com/in/gabrieldeveloperweb/" target="_blank" rel="noopener noreferrer" title="Ir para Linkedin" aria-label="Ir para linkedin">
                        <GrLinkedinOption className={estilos.icones1} />
                    </a>

                    <a href="https://github.com/GabrielFR-Dev" target="_blank" rel="noopener noreferrer" title="Ir para GitHub" aria-label="Ir para GitHub">
                        <IoLogoGithub className={estilos.icones2} />
                    </a>
                </div>
            </nav>
        </header>
    )
}