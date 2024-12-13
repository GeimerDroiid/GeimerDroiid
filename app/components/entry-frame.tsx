import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";

export default function EntryFrame() {
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const [startShine, setStartShine] = useState<boolean>(false);

    const variants: Variants = {
        show: { opacity: 1, y: 0 },
        shine: {
            opacity: 1, y: 0,
            textShadow: [
                "0px 0px 0px rgba(255, 255, 255, 0)",
                "0px 0px 8px rgba(255, 255, 255, 1)"
            ]
        }
    };

    return <AnimatePresence>
        {isRunning && (
            <motion.div className="fixed z-50 top-0 left-0 w-screen h-screen overflow-hidden will-change-[opacity] flex flex-wrap justify-center content-center gap-x-2 bg-neutral-950 text-3xl text-center text-neutral-50"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, transition: { delay: 3 } }}
                exit={{ opacity: 0 }}
                onAnimationComplete={() => setIsRunning(false)}
            >
                <motion.div className="font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    variants={variants}
                    animate={startShine ? "shine" : "show"}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => setStartShine(true)}
                >Juan Manuel</motion.div>
                <motion.div className="font-extralight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >Software Developer</motion.div>
            </motion.div>
        )}
    </AnimatePresence>
};