import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';
import ScriptSetup from 'unplugin-vue2-script-setup/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ScriptSetup({
      reactivityTransform: true,
    }),
  ],
});
