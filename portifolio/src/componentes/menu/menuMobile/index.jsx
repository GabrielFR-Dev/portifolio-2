"use client"
import estilos from "./menuMobile.module.css";
import Link from "next/link";
export default function MenuMobile({ fecharMenu }) {
    return (
        <div className={estilos.overlay}>
            <nav className={estilos.menuMobile}>
                <ul>
                    <li>
                        <Link href="/" className={estilos.linkMobile} aria-label="Ir para página principal" rel="noopener noreferrer" onClick={fecharMenu}>
                            Home
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/about" className={estilos.linkMobile} aria-label="Ir para página principal" rel="noopener noreferrer" onClick={fecharMenu}>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/mySkills" className={estilos.linkMobile} aria-label="Ir para minhas Habilidades" rel="noopener noreferrer" onClick={fecharMenu}>
                            My Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/projectss" className={estilos.linkMobile} aria-label="Ir para meus projetos" rel="noopener noreferrer" onClick={fecharMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/training" className={estilos.linkMobile} aria-label="Ir para minha formação" rel="noopener noreferrer" onClick={fecharMenu}>
                            Training
                        </Link>
                    </li>
                </ul>

            </nav>

        </div>
    )
}