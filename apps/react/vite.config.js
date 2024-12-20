import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// process.env.PUBLIC_PATH = '/pr-70/';
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],

    base: process.env.PUBLIC_PATH,

    build: {
      outDir: path.resolve(__dirname, '../../page'),
    },
  });
};
