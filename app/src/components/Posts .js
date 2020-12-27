import React from 'react';
import NotebookS from './Notebook/NotebookS';
import PostS from './Post/PostS';

function Posts(props) {
  return (
    <div className="App">
      <h3>My Thoughts App</h3>
      <PostS reScrean={props.reScrean}reScreanChenge={props.reScreanChenge}/>
      <NotebookS reScreanChenge={props.reScreanChenge}/>
    </div>
  );
}

export default Posts;
