import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import globule from 'globule';

// globuleでsrc以下のhtmlファイルを全て引っ張ってくる
const htmlFiles = globule.find('src/**/*.html');

export default defineConfig({
  plugins: [
    vue(),
  ],
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
          let extType = assetInfo.name.split('.')[1];
          //Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          //ビルド時のCSS名を明記してコントロールする
          if(extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
      }
    }
  }
})



// const cssFiles = globule.find('src/assets/scss/*.scss');


// html プラグインの設定
// {
//   name: 'static-html',
//   enforce: 'pre',
//   apply: 'build',
//   generateBundle(_options, bundle) {
//     const htmlContent = bundle[htmlFiles[0]].source;
//     // ここで必要な変換を行う
//     // 例: htmlContent を静的なHTMLに変換する処理
//           【input をhtmlContentに変更する？？？】
//   }
// }

// assetsInfoでやってみたやつ
// const {name} = assetInfo;
// // ifで無理矢理ディレクトリ分け・・・
// if (/\.(jpe?g|png|gif|svg)$/.test(name ?? '')) {
//   return 'assets/images/[name].[ext]';
// }
// if (/\.(css)$/.test(name ?? '')) {
//   return 'assets/css/[name].css';
// }
// if (/\.(js)$/.test(name ?? '')) {
//   return 'assets/js/[name].js';
// }
// return 'assets/[name].[ext]';

// globuleで無視したいファイルがあるとき第二引数に記載
// {
//   ignore : [
//     'src/assets/_*.js'
//   ]
// }

// scssのビルド - scss/以下の.scssをビルドする（_から始まるファイルは除く）
// import glob from 'fast-glob';

// rollUpOptions内
// input: [
//   glob.sync(['src/assets/scss/**/*.scss', '!**/_*']),
// ],
// output: {
//   assetFileNames: ({name}) => `${name?.replace('scss/', 'css/')}`,
// }

//   // コンポーネントごとに別の出力チャンクを生成する
// rollUpOptions内
// manualChunks(app) {
//   if (app.includes('src/components')) {
//     return `component-${app.slice(app.lastIndexOf('/') + 1, app.lastIndexOf('.'))}`;
//   }
// },