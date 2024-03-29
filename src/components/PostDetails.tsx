import React, { useEffect, useState } from 'react';
import { getPostDetails, addComment, deleteComment, getPostComments } from '../api/api';
import { NewCommentForm } from './NewCommentForm';

type Props = {
  selectedPostId: number;
};

export const PostDetails: React.FC<Props> = (props) => {
  const { selectedPostId } = props;
  const [post, setPost] = useState(null as Post | null);
  const [comments, setComments] = useState([] as Comment[]);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    getPostDetails(selectedPostId)
      .then(response => {
        setPost(response);
      });
    getPostComments(selectedPostId)
      .then(response => setComments(response));
  }, [selectedPostId]);

  const addNewComment = (newComment: Partial<Comment>) => {
    addComment(newComment as Comment)
      .then(() => getPostComments(selectedPostId))
      .then(response => setComments(response));
  };

  const deleteCommentOnServer = (commentsId: number) => {
    deleteComment(commentsId)
      .then(() => getPostComments(selectedPostId))
      .then(response => setComments(response));
  };

  const handleChange = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="PostDetails">
      <h2>Post details:</h2>

      <section className="PostDetails__post">
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </section>

      <section className="PostDetails__comments">
        <button type="button" className="button" onClick={handleChange}>
          {isVisible
            ? `Hide ${comments.length} comments`
            : `Show ${comments.length} comments`}
        </button>

        <ul className="PostDetails__list">
          {isVisible && (
            <>
              {comments.map(comment => (
                <li className="PostDetails__list-item" key={comment.id}>
                  <p>{comment.body}</p>
                  <button
                    type="button"
                    className="PostDetails__remove-button button"
                    onClick={() => deleteCommentOnServer(comment.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </>
          )}
        </ul>
      </section>

      <section>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm
            selectedPostId={selectedPostId}
            onAdd={addNewComment}
          />
        </div>
      </section>
    </div>
  );
};
