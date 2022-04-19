import React, { useEffect, useState } from "react";
import { SiCodewars, SiSpotify, SiDiscord, SiLinkedin } from "react-icons/si";
import { CgMenuGridR, CgMenuGridO } from "react-icons/cg";
import { IComponentProps } from "../context/interfaces";
import "../css/nav-bar.css";


export default function NavBar({ active }: IComponentProps) {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const pos = (elements: NodeListOf<Element>): number => {
        let y: number = 0;

        elements.forEach((e: Element, i: number) => {
            if (e.classList.contains("active")) {
                y = 100 / elements.length * i;
            };
        });

        return y;
    };

    useEffect(() => {
        const handleResize = (): void => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return (): void => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (width < 849) {
            if (showMenu) {
                document.getElementById("NavBar")!.style.textIndent = "0";
                document.getElementById("NavBar")!.style.width = "100%";
                document.querySelector("#NavBar > header > p")!.classList.add("show");
            } else {
                document.getElementById("NavBar")!.style.textIndent = "-9999px"
                document.getElementById("NavBar")!.style.width = "0";
                document.querySelector("#NavBar > header > p")!.classList.remove("show");
            };
        } else {
            document.getElementById("NavBar")!.removeAttribute("style");
            document.querySelector("#NavBar > header > p")!.classList.remove("show");
        };
    }, [showMenu, width]);

    useEffect(() => {
        document.querySelector(`a[href="${active}"]`)?.parentElement?.classList.add("active");
        document.title = active === "/" ? "Dawnt" : active ? `Dawnt | ${active[1].toUpperCase()}${active.replace("/", "").slice(1)}` : "Dawnt";

        const index: HTMLHtmlElement | null = document.querySelector("#index > div");
        let elements: NodeListOf<Element> | null = document.querySelectorAll("nav > ul > li");
        let y: number = pos(elements);

        index!.style.top = `${y}%`;

        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("mouseover", () => {
                index!.style.top = `${100 / elements!.length * i}%`;
            });

            elements[i].addEventListener("mouseout", () => {
                index!.style.top = `${y}%`;
            });
        };
    }, [active]);

    return (
        <>
            {width < 849 && !showMenu && <CgMenuGridR id="Menu" onClick={(): void => setShowMenu(!showMenu)} />}
            <aside id="NavBar">
                <header>
                    <div id="Button">
                        <CgMenuGridO onClick={(): void => setShowMenu(!showMenu)} />
                    </div>
                    <a href="https://github.com/DawntDev" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><img src="./assets/img/avatar.gif" alt="avatar" width="6rem" /></a>
                    <a href="https://github.com/DawntDev" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><h1>Dawnt</h1></a>
                    <p>Mexico<br /> Software Developer</p>
                </header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <div id="index">
                        <div></div>
                    </div>
                </nav>
                <footer>
                    <div>
                        <a href="https://www.codewars.com/users/Dawnt" aria-label="CodeWars" target="_blank" rel="noopener noreferrer"><SiCodewars /></a>
                        <a href="https://open.spotify.com/playlist/6eDl0FX1pNcaFXgYIBOobX?si=aewrQ2nJTuSgkMSip3d8-Q&utm_source=copy-link" aria-label="Spotify" target="_blank" rel="noopener noreferrer"><SiSpotify /></a>
                        <a href="https://www.discord.gg/mexicodev" aria-label="Discord" target="_blank" rel="noopener noreferrer"><SiDiscord /></a>
                        <a href="/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
                    </div>
                    <p>&copy; Dawnt 2022</p>
                </footer>
            </aside>
        </>
    );
};