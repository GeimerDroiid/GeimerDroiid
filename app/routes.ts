import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "routes/projects.tsx"),
    route("tech-stack", "routes/tech-stack.tsx"),
    route("info", "routes/info.tsx"),
    route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
