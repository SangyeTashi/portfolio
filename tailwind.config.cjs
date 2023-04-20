/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#3330E4',
                'neon-pink': '#F637EC',
                'neon-orange': '#FBB454',
                'neon-yellow': '#FAEA48',
                primary: '#00004d',
                secondary: '#004eb3',
                white: '#dddde5',
                'accent-pink': '#fe0bbf',
            },
        },
    },
    plugins: [],
};
