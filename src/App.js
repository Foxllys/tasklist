import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import './styles/app.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JS1", body: "Description 1"},
    {id: 2, title: "JS2", body: "Description 2"},
    {id: 3, title: "JS3", body: "Description 3"},
    
  ]);
  
const createPost = (newPost) => {
  setPosts([...posts, newPost]);
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id));
}
  
  return (
    
    <div className="App">
      <PostForm create={createPost}/>

      <PostList remove={removePost} posts={posts} title='Post list one'/> 

    </div>
  );
}

export default App;
