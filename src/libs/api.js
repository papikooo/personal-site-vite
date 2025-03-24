// api.js
export const fetchBlogs = async (params) => {
  try {
    let url = '/api/notes'; // 基本のURL

    // contentIdが指定されている場合は、特定の記事を取得するAPIに変更
    if (params.contentId) {
      url = `http://localhost:3000/api/notes/${params.contentId}`; // サーバーの API 経由でデータを取得
    }
    // category が指定されている場合、クエリパラメータを追加
    else if (params.category) {
      url += `?category=${params.category}`;
    }

    console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};
