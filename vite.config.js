import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import globule from 'globule'

// globuleでsrc以下のhtmlファイルを全て引っ張ってくる
const htmlFiles = globule.find('src/**/*.html');

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  envDir: '../', // .env.localファイルの場所（ルート（src）からの相対パス）
  resolve: {
    alias: {
      '@': './src', // ルートからの相対パス
      '@c': './src/components'
    },
  },
  build: {
    base: '/', // ルートディレクトリに変更
    outDir: '../dist', // 出力場所の指定
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles,
      output: {
        // build時の名前をentry、chunk、assets毎に指定（既定のハッシュを消す）
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          // Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          // ビルド時のCSS名を明記してコントロールする
          if (extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
      }
    }
  }
})

      // ライブラリにバンドルされるべきではない依存関係（vue）を外部化しない
      // external: ['vue'], // 外部化しない