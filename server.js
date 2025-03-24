import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { createClient } from 'microcms-js-sdk';


 // .env ファイルを読み込む
dotenv.config();
// Expressアプリケーションの作成
const app = express();
const port = 3000; // 任意のポートを指定

// CORSを有効化（フロントエンドのURLを許可）
app.use(cors({
  origin: 'http://localhost:5173', // フロントエンドのURLを指定
  methods: 'GET'
}));

// MicroCMSクライアントの作成
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN, // .env ファイルなどで設定
  apiKey: process.env.MICROCMS_API_KEY, // .env ファイルなどで設定
});

// 全記事またはカテゴリごとの記事を取得
app.get('/api/notes', async (req, res) => {
  try {
    const { category, limit } = req.query;
    const queries = {};
    
    if (category) {
      queries.filters = `category[equals]${category}`;
    }
    if (limit) {
      queries.limit = parseInt(limit, 10); // 数値に変換
    }

    // MicroCMSからデータを取得
    const response = await client.get({
      endpoint: 'notes',
      queries,
    });
    // 成功したらレスポンスを返す
    res.setHeader('Content-Type', 'application/json'); // JSONを明示
    res.json(response);
  } catch (error) {
    // エラー処理
    console.error('Error fetching data from MicroCMS:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// 個別記事を取得
app.get('/api/notes/:postId', async (req, res) => {
  try {
    const { postId } = req.params;

    // MicroCMS から該当記事を取得
    const response = await client.get({
      endpoint: 'notes',
      contentId: postId, // contentId を指定
    });

    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  } catch (error) {
    console.error('Error fetching blog post:', error);

    // MicroCMS API の 404 エラーを適切に処理
    if (error.response?.status === 404) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(500).json({ error: 'Failed to fetch the blog post' });
    }
  }
});

// 静的ファイルの提供（フロントエンドのビルドファイル）
app.use(express.static('dist')); // distはビルドされたVueプロジェクトのフォルダ

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
