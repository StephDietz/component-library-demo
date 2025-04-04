import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@repo/react-lib': path.resolve(__dirname, '../../packages/react-lib'),
    },
  },
});