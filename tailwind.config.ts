import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            padding: { common: "var(--padding)" },
            fontFamily: { "neue-montreal": ["Neue Montreal", "sans-serif"] }
        }
    },
    plugins: [],
} satisfies Config;
