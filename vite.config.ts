import { defineConfig } from 'vite';
import { sallaTransformPlugin, sallaDemoPlugin, sallaBuildPlugin } from '@salla.sa/twilight-bundles/vite-plugins';

export default defineConfig({
  plugins: [
    sallaTransformPlugin(),
    sallaDemoPlugin(),
    sallaBuildPlugin()
  ]
});
