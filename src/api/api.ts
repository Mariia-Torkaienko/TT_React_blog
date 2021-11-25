export const BASE_URL = 'https://bloggy-api.herokuapp.com';
// також було б круто винести поінти в const (comments, posts ...)

export const request = async (url:string, item = {}) => {
  const response = await fetch(`${BASE_URL}/${url}`, item);

  return response.json();
};

export const getPostComments = async (postId: number) => {
  return request(`comments?postId=${postId}`);
};

export const addComment = async (newComment: Comment) => {
  return request('comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newComment),
  });
};

export const deleteComment = async (commentsId: number) => {
  return request(`comments/${commentsId}`, { method: 'DELETE' });
};

export const addPost = async (newPost: Post) => {
  return request('posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
};

export const getPosts = async () => {
  return request('posts', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export const getPostDetails = async (postId: number) => {
  return request(`posts/${postId}?_embed=comments`);
};

export const deletePost = async (postId: number) => {
  return request(`posts/${postId}`, { method: 'DELETE' });
};

export const UpdatePost = async (postId: number) => {
  return request (`posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(postId),
  });
};
