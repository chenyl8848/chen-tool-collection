import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    requireTransform({
      fileRegex: /.js$|.vue$/
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname + '/src')
    }
  },
  server: {
    host: 'localhost',
    hmr: true
  }
})
