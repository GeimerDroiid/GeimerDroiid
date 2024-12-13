import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import type { ext } from "~/schemas/types";


const letters = String.fromCharCode(...Array.from({ length: 123 - 32 }, (_, i) => i + 32));
const TypingEffect = ({ cmd, path }: { cmd: string, path: string }) => {
    const sleep = useMemo(
        () => Number.parseFloat(`0.${"0".repeat(cmd.length + path.length - 3)}1`),
        [cmd, path]
    );

    const [displayedCmd, setDisplayedCmd] = useState<string[]>(Array(cmd.length));
    const [displayedPath, setDisplayedPath] = useState<string[]>(Array(path.length));
    const [indexCmd, setIndexCmd] = useState<number>(0);
    const [indexPath, setIndexPath] = useState<number>(0);


    useEffect(() => {
        if (indexCmd < cmd.length) {
            const timeout = setTimeout(() => {
                for (const letter of letters) {
                    setDisplayedCmd((prev) => {
                        const newCmd = [...prev];
                        newCmd[indexCmd] = letter;
                        return newCmd;
                    });

                    if (letter === cmd[indexCmd])
                        break;
                };
                setIndexCmd((prev) => prev + 1);
            }, sleep * 1000);

            return () => clearTimeout(timeout);
        } else if (indexPath < path.length) {
            const timeout = setTimeout(() => {
                for (const letter of letters) {
                    setDisplayedPath((prev) => {
                        const newPath = [...prev];
                        newPath[indexPath] = letter;
                        return newPath;
                    });

                    if (letter === path[indexPath])
                        break;
                };
                setIndexPath((prev) => prev + 1);
            }, sleep * 1000);

            return () => clearTimeout(timeout);
        }
    }, [indexCmd, indexPath, cmd, path]);

    return <><span className="font-semibold">{displayedCmd.join("")}</span> {displayedPath.join("")}</>;
};





export default function Cmd({ extension }: { extension: ext | undefined }) {
    const { pathname } = useLocation();
    const cmdParser = useCallback((path: string, ext: string | undefined): ReactNode => {
        if (path === "/")
            return <TypingEffect cmd="touch" path="./about-me.md" />;

        if (ext) {
            const commands: Record<string, string> = {
                ".md": "touch",
                ".py": "python",
                ".js": "node",
            };

            const command = commands[ext];
            if (command)
                return <TypingEffect cmd={command} path={`.${path}${ext}`} />;

        }

        // Default case
        return <TypingEffect cmd="cd" path={`.${path}`} />;

    }, [pathname, extension]);

    const content = cmdParser(pathname, extension);
    return (
        <div className="before:content-['▶'] before:mr-2 mb-4">
            {content}
        </div>
    );
}
