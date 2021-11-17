import React, { useState } from 'react';
import './App.scss';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';

const App: React.FC = () => {
  const [postId, setPostId] = useState(0);

  return (
    <div className="App">
      <main className="App__main">
        <div className="App__sidebar">
        <PostsList
            selectedPostId={postId}
            selectPost={setPostId}
          />
        </div>

        {postId !== 0 && (
          <div className="App__content">
            <PostDetails
              selectedPostId={postId}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
