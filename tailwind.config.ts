import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "neue-montreal": ["Neue Montreal", "sans-serif"]
            }
        }
    },
    plugins: [],
} satisfies Config;
