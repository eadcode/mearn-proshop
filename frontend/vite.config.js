import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        eslintPlugin({
            // setup the plugin
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx'],
            exclude: [],
        }),
    ],
    server: {
        // proxy requests prefixed '/api' and '/uploads'
        proxy: {
            // '/api': 'http://localhost:5000',
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                secure: false,
                ws: false
            },
            '/uploads': 'http://localhost:5000',
        },
    },
});
