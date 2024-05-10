import { fileURLToPath } from 'node:url';
import { extname, relative } from 'path';

import react from '@vitejs/plugin-react-swc';
import { glob } from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: [
        'lib/components/**/*',
        'lib/integrated-components/**/*',
        'lib/assets/**/*',
        'lib/constants/*',
      ],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        components: 'lib/components/index.ts',
        integratedComponents: 'lib/integrated-components/index.ts',
        assets: 'lib/assets/index.ts',
        icons: 'lib/assets/icons/index.ts',
        sidebarIcons: 'lib/assets/icons/sidebar/index.ts',
        constants: 'lib/constants/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'lottie-react', 'date-fns'],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative('lib', file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name]-[hash][extname]';
          }

          if (/\.(s?css)$/.test(name ?? '')) {
            return 'styles/[name]-[hash][extname]';
          }

          return 'raw/[name][extname]';
        },
        entryFileNames: '[name].js',
      },
    },
  },
});
