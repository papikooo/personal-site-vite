import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: 'src',
  build: {
    base: './', //相対パスでビルド
    outDir: '../dist', //出力場所の指定
  }
})
