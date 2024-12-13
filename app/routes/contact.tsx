import { useOutletContext } from "react-router";
import type { FileTypeSetter } from "~/schemas/types";
import type { Route } from "./+types/contact";

export default function Contact() {
    const { setFileType } = useOutletContext<{ setFileType: FileTypeSetter }>()
    setFileType(undefined);
    
    return <h1>Contact</h1>;
}
