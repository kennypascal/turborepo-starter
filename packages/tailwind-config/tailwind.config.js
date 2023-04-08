const colors = require('tailwindcss/colors')

module.exports = {
    prefix: 'tw-',
    content: [
        // app content
        `src/**/*.{js,ts,jsx,tsx}`,
        // include packages if not transpiling
        "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'kpcom-1': '#051A2D',
                'kpcom-2': '#0269A0',
                'kpcom-3': '#2585C1',
                'kpcom-4': '#68C3E6',
                'kpcom-5': '#F70062',
                'kpcom-6': '#990047',
                brandblue: colors.blue[500],
                brandred: colors.red[500],
            },
        },
    },
    plugins: [],
}
