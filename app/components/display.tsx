import { useEffect, type ReactNode } from "react";

export default function Display({ children }: { children: ReactNode }) {

    useEffect(() => {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const togleTheme = (theme: "light" | "dark") => {
        if (theme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        };
    };

    return <div className="w-full h-full bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 transition-colors duration-100 ease-out border-[0.05px] border-neutral-950 dark:border-neutral-50 p-common">
        {children}
        <div className="fixed z-10 left-[var(--padding)] bottom-[var(--padding)] origin-bottom-left -rotate-90 whitespace-nowrap flex gap-x-4 font-normal uppercase text-xs">
            <div className="flex gap-x-1 cursor-pointer" onClick={() => togleTheme("light")}>
                <div className="dark:before:content-['□'] before:content-['■']"></div>
                Light
            </div>
            <div className="flex gap-x-1 cursor-pointer" onClick={() => togleTheme("dark")}>
                <div className="before:content-['□'] dark:before:content-['■']"></div>
                Dark
            </div>
        </div>
        <div className="fixed z-10 left-[var(--padding)] bottom-[calc(var(--padding)*0.5-0.5em)] text-xs opacity-50">
            <p className="font-semibold text-nowrap">© DawntDev - {new Date().getFullYear()}</p>
        </div>
    </div>
};