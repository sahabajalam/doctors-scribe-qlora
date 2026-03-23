import { defineConfig } from 'vite';

export default defineConfig({
    // base: './', // Commented out for Cloud Run root deployment
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                comparison: 'comparison.html',
            },
        },
    },
});
