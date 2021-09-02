import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getArticlesById } from "./redux/actions/index";

function App() {
  const [input, setInput] = useState("")
  // 1. Hard code your UI.
  // 2. Hard code data, and set the UI to use that data.
  // 3. Dynamically get my data.

  // const [posts, setPosts] = useState([]);
  // const [myPosts, setMyPosts] = useState([]);

  const posts = useSelector((state) => state.articles);
  const postsById = useSelector((state) => state.articlesById);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const getById = (id) => {
    dispatch(getArticlesById(parseInt(id)))
  }

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setPosts(response.data);
  //       const filteredPosts = response.data.filter(post => post.userId === 1);
  //       setMyPosts(filteredPosts);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  if(loading){
    return <h1>Loading . . .</h1>
  }

  return (
    <div className="container">
        <button onClick={() => getById(input)}>user id</button>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="row">
        <Posts posts={posts} title="All Posts" />
        <Posts posts={postsById} title="My Posts" />
      </div>
    </div>
  );
}

export default App;
