import React, { useState } from "react";
import { useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
// import Counter from './components/Counter';
// import ClassCounter from './components/classCounter';
// import { useRef } from "react";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aaa", body: "ddd" },
    { id: 2, title: "ccccc 2", body: "eeee" },
    { id: 3, title: "bbbbb 3", body: "hhhhh" },
  ]);

  // const bodyInputRef = useRef();

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [sortedPosts, filter.query]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Посты про JS'
      />
    </div>
  );
}

export default App;
