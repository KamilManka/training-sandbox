import React, { useState, useEffect } from "react";
import { useAPI } from "./useAPI";

export const Posts = () => {
  const [offset, setOffset] = useState(4);
  const { isLoading, isError, data:posts } = useAPI(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const changeOffset = (param) => {
    if (param) {
      setOffset((prev) => prev - 4);
    } else {
      setOffset((prev) => prev + 4);
    }
  };
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    setPostsToDisplay(posts.slice(0, 4));
  }, [posts]);


  useEffect(() => {
    setPostsToDisplay(posts.slice(offset - 4, offset));
  }, [offset, posts]);

  if (!posts.length) {
    return <>Brak postów...</>;
  }

  if (isError) {
    return <div>{isError}</div>
  } else if (isLoading) {
    return <div>Is loading</div>
  } else {

  return (
    <>
      {postsToDisplay.map((el) => {
        return (
          <div key={el.id}>
            <p>
              {el.id} Title: {el.title}
            </p>
            <p>Body: {el.body}</p>
          </div>
        );
      })}
      <button onClick={() => changeOffset(0)} disabled={offset === 4}>
        Prev
      </button>
      <button
        onClick={() => changeOffset(1)}
        disabled={posts.length === offset}
      >
        Next
      </button>
    </>
  );
    }
};
