import type { Dispatch, SetStateAction } from "react";

export type ext = `.${string}`
export type FileTypeSetter = Dispatch<SetStateAction<ext | undefined>>;