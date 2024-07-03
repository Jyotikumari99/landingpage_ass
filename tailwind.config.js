/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3A5B3F",
                secondary: "#A3C98A",
                "secondary-foreground": "#eeffe2",
            },
        },
    },
    plugins: [],
};
