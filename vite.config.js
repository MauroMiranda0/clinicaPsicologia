import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Actions provides the repository path (for example
  // `/clinicaPsicologia/`). Local development continues to use `/`.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
