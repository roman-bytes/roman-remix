import { createCookieSessionStorage } from "@remix-run/node";

const themeStorage = createCookieSessionStorage({
    cookie: {
        name: "theme",
        secure: process.env.NODE_ENV === "production",
        secrets: ["supersecret"], // Replace with your actual secret
        sameSite: "lax",
        path: "/",
        httpOnly: true,
    },
});

export async function getThemeSession(request: Request) {
    const session = await themeStorage.getSession(request.headers.get("Cookie"));
    return {
        getTheme: () => session.get("theme"),
        setTheme: (theme: string) => session.set("theme", theme),
        commit: () => themeStorage.commitSession(session),
    };
}