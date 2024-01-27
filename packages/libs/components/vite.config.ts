
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'path'; // Importe a função resolve do módulo path

import packageJson from './package.json'; // Certifique-se de ter um arquivo package.json na raiz do seu projeto

export default defineConfig((configEnv) => ({
  plugins: [
    // tailwindcss('./tailwind.config.js'),
    react(),
    tsConfigPaths(),
    dts({
      include: ['src/components/'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('src/index.html'), // Use a função resolve para obter o caminho absoluto
      name: 'Components',
      formats: ['es', 'umd'],
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
