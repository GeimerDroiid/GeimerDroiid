import { useOutletContext } from "react-router";
import type { FileTypeSetter } from "~/schemas/types";
import type { Route } from "./+types/projects";

export default function Projects() {
    const { setFileType } = useOutletContext<{ setFileType: FileTypeSetter }>()
    setFileType(undefined);
    
    return <h1>Projects</h1>;
}
