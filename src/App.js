import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post/Post";

function App() {
  // 1. Hard code your UI.
  // 2. Hard code data, and set the UI to use that data.
  // 3. Dynamically get my data.

  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
        const filteredPosts = response.data.filter(post => post.userId === 1);
        setMyPosts(filteredPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>All Posts</h1>
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
        <div className="col-6">
          <h1>My Posts</h1>
          {myPosts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
