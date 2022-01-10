import React, { useState, useEffect } from "react";
import "./style.css";

const pagesNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`);
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, [pageNumber]);

  const buttonsList = pagesNumbers.map((number) => {
    return (
      <button onClick={() => setPageNumber(number)} key={number}>
        {number}
      </button>
    );
  });

  const post = posts.map((post) => {
    return (
      <div key={post.id} className="post">
        <img src={post.url} alt={post.title}></img>
        <p>{post.title}</p>
      </div>
    );
  });

  return (
    <div className="wrapper">
      {post}
      <div>{buttonsList}</div>
    </div>
  );
};

export default Pagination;
