 const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './resources/**/*.antlers.html',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },
    important: true,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.coolGray,
            primary: colors.cyan,
        },
        extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
