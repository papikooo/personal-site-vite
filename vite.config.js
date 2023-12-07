import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import globule from 'globule';
// import glob from 'fast-glob';

const htmlFiles = globule.find('src/**/*.html');
// 無視したいファイルがあるとき第二引数に記載
// {
//   ignore : [
//     'src/assets/_*.js'
//   ]
// }

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  build: {
    base: './', //相対パスでビルド
    outDir: '../dist', //出力場所の指定
    emptyOutDir: true,
    rollupOptions: {
      // ライブラリにバンドルされるべきではない依存関係（vue）を外部化
      external: ['vue'],
      // 外部化された依存関係のために UMD（moduleの一種） のビルドで使用するグローバル変数を提供
      globals: {
      vue: 'Vue',
      },
      input: htmlFiles,
      output: {
        // build時の名前をentry、chunk、assets毎に指定（既定のハッシュを消す）
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          const {name} = assetInfo
          // if分で無理矢理ディレクトリ分け・・・
          if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
            return 'assets/images/[name][ext]';
          }
          if (/\.(css)$/.test(name ?? '')) {
            return 'assets/css/[name].css';
          }
          if (/\.(js)$/.test(name ?? '')) {
            return 'assets/js/[name].js';
          }
          return 'assets/[name].[ext]';
        }
      }
      
      // scssのビルド - scss/以下の.scssをビルドする（_から始まるファイルは除く）
      // [
      //   glob.sync(['src/assets/scss/**/*.scss', '!**/_*']),
      // ],
      // output: {
      //   assetFileNames: ({name}) => `${name?.replace('scss/', 'css/')}`,
      // }
    }
  }
})