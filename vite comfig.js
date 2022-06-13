// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products.html'),
                About: resolve(__dirname, 'About.html'),
                contact: resolve(__dirname, 'contacst.html'),

            }
        }
    }
})