import { useOutletContext } from "react-router";
import type { FileTypeSetter } from "~/schemas/types";
import type { Route } from "./+types/info";

export default function Info() {
    const { setFileType } = useOutletContext<{ setFileType: FileTypeSetter }>()
    setFileType(undefined);

    return <h1>Info</h1>;
}
