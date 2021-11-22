import React, { FormEvent, useState } from 'react';

type Props = {
  onAdd: (newPost: Partial<Post>) => void;
};

export const NewPostForm: React.FC<Props> = (props) => {
  const { onAdd } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd({
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  return (
    <form className="NewPostForm" onSubmit={handleSubmit}>
      <div className="form-field">
        <input
          type="text"
          name="title"
          placeholder="Add your title"
          className="NewPostForm__input"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-field">
        <textarea
          name="body"
          placeholder="Type post here"
          className="NewPostForm__input"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewPostForm__submit-button button"
      >
        Add a post
      </button>
    </form>
  );
};
