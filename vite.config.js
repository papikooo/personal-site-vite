import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import glob from 'fast-glob';

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  build: {
    base: './', //相対パスでビルド
    outDir: '../dist', //出力場所の指定
    rollupOptions: {
      // ライブラリにバンドルされるべきではない依存関係（vue）を外部化
      external: ['vue'],
      // scssのビルド - scss/以下の.scssをビルドする（_から始まるファイルは除く）
      input: glob.sync(['src/scss/**/*.scss', '!**/_*']), 
      output: {
        assetFileNames: ({name}) => `${name?.replace('scss/', 'css/')}`,
         // 外部化された依存関係のために UMD のビルドで使用するグローバル変数を提供
        globals: {
          vue: 'Vue',
        },
      }
    }
  }
})
