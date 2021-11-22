import React, { FormEvent, useState } from 'react';

type Props = {
  selectedPostId: number;
  onAdd: (newComment: Partial<Comment>) => void;
};

export const NewCommentForm: React.FC<Props> = (props) => {
  const { selectedPostId, onAdd } = props;
  const [body, setBody] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      postId: selectedPostId,
      body,
    });

    setBody('');
  };

  return (
    <form className="NewCommentForm" onSubmit={handleSubmit}>
      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};
