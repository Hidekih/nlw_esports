/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './index.html'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                galaxy: "url('./bg.svg')",
                'nlw-gradient':
                    'linear-gradient(90deg, #9572FC, #43E7AD, #E1D55D);',
                'nlw-card-gradient':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
            },
            borderColor: {
                'nlw-gradient':
                    'linear-gradient(90deg, #9572FC, #43E7AD, #E1D55D);'
            }
        }
    },
    plugins: []
}

