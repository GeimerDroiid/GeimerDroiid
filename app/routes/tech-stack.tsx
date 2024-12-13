import { useOutletContext } from "react-router";
import type { FileTypeSetter } from "~/schemas/types";
import type { Route } from "./+types/tech-stack";

export default function TechStack() {
    const { setFileType } = useOutletContext<{ setFileType: FileTypeSetter }>()
    setFileType(undefined);
    
    return <h1>TechStack</h1>;
}