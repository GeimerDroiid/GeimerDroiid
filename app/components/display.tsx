import type { ReactNode } from "react";

export default function Display({ children }: { children: ReactNode }) {
    return <div>
        {children}
    </div>
};