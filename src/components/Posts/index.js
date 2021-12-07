import React, { useEffect, useState } from "react";

const Posts = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("https://192.168.31.187:3004/posts");
    const data = await response.json();
    setPosts(data);
  };

  const userPost = async () => {
    (async () => {
        const response = await fetch('https://192.168.31.187:3004/posts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          userId: 1,
          title: "test",
          body: "test"})
        })
    })
    const data = await response.json()
    setPosts({...posts, data})
  }


  return (
    <>
      {posts.map((item) => {
        return (
            <>
          <div key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
          </div>
          <button onClick={userPost}>Create post</button>
          </>
        );
      })}
    </>
  );
};

export default Posts;
