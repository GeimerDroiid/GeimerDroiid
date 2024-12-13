import { useOutletContext } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { ext, FileTypeSetter } from "~/schemas/types";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const { setFileType } = useOutletContext<{ setFileType: FileTypeSetter }>()
    useEffect(() => setFileType(undefined));

    return <main>
        <header>
            <h1>Juan Manuel</h1>
            <h3>Software Developer </h3>
        </header>
    </main>;
}
