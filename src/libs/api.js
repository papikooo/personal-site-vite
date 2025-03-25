// api.js
export const fetchBlogs = async (params) => {
  try {
    let url = 'https://personal-site-versel.vercel.app/api/notes';

    // contentIdが指定されている場合
    if (params.contentId) {
      url += `/${params.contentId}`;
    }
    // category が指定されている場合
    else if (params.category) {
      url += `?category=${params.category}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};
