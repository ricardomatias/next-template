module.exports = {
    mode: 'jit',
    content: ['./modules/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: [],
    theme: {
        extend: {
            width: {
                '1/7': '14.2857143%',
                '1/8': '12.5%',
                '1/9': '11.1%',
                '1/10': '10%',
            },
            screens: {
                xs: '375px',
                '2xl': '1680px',
            },
            container: {
                // you can configure the container to be centered
                center: true,

                // or have default horizontal padding
                // padding: '1rem',

                // default breakpoints but with 40px removed
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1680px',
                },
            },
            fontSize: {
                base: ['1rem', '1.25'],
                xxs: ['10px', '1'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
