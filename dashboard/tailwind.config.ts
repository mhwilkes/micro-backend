module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'apple-gray': '#f5f5f7',  // A near-white gray typical in Apple designs
                'apple-blue': '#007aff',  // Apple's signature blue
                'text-normal': '#1d1d1f', // Darker gray for text
                'text-light': '#86868b',  // Lighter gray for less prominent text
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
            },
            spacing: {
                1: '0.25rem',  // 4px
                2: '0.5rem',   // 8px
                3: '0.75rem',  // 12px
                4: '1rem',     // 16px
                // More spacing values can be added as needed.
            },
            boxShadow: {
                'apple': '0 1px 3px rgba(60, 64, 67, 0.15)' // Subtle shadow for depth
            },
        },
    },
    plugins: [],
};