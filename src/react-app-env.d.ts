/// <reference types="react-scripts" />

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  body: string;
}
