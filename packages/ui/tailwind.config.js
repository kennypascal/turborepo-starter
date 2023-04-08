const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    // prefix ui lib classes to avoid conflicts
    prefix: 'ui-',
    presets: [sharedConfig],
}
