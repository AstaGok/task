import React from 'react'
import PostContent from './PostContent';
import data from "../data/learning.json";
import { useState } from "react";


function PostsList() {
  const [posts, setPosts] = useState(data);

  function changeStatus(id) {
    const updatePosts = [...posts];
    updatePosts.forEach((post) => {
      if (post.id == id) {
        post.status = true;
      }
    });
    setPosts(updatePosts);
  }

  const listas = posts.map((post) => {
    return (
      <PostContent
      key={post.id}
      id={post.id}
      title={post.taskTitle}
      content={post.content}
      img={post.img}
      status={post.status}
      changeStatus={changeStatus}
      />
    );
  });
  return <div className="row">{listas}</div>;
}

export default PostsList;