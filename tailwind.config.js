/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customcolor: 'var(--custom-color)',
                customgreen: 'var(--custom-green)',
                customwhite: 'var(--custom-white)'
            },
        },
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1535px',
    },
    plugins: [],
}