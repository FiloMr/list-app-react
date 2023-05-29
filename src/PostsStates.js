import React, { useState, useEffect } from "react";
import "./Posts.css";
import PostsList from "./PostsList";
import articlesData from "./articles.json";

function PostsStates() {
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const updatedPosts = articlesData.map((post) => {
      const { upVotes, downVotes } = post;
      return {
        ...post,
        upVotes: upVotes || 0,
        downVotes: downVotes || 0,
      };
    });

    setPosts(updatedPosts);
    setPostCount(updatedPosts.length);
  }, []);

  const removePost = (postIndex) => {
    setPosts(posts.filter((post, index) => index !== postIndex));
    setPostCount((prevCount) => prevCount - 1);
  };

  const handleVote = (postIndex, voteType) => {
    const updatedPosts = [...posts];
    if (voteType === "upvote") {
      updatedPosts[postIndex].upVotes += 1;
    } else if (voteType === "downvote") {
      updatedPosts[postIndex].downVotes -= 1;
    }
    setPosts(updatedPosts);
  };

  const addPost = (event) => {
    event.preventDefault();

    if (inputText.trim() !== "") {
      const postId = Date.now().toString();
      const newPostObject = {
        id: postId,
        content: inputText,
        upVotes: 0,
        downVotes: 0,
      };
      setPosts([...posts, newPostObject]);
      setPostCount((prevCount) => prevCount + 1);
      setInputText("");
      alert("Your post was added");
    } else {
      alert("Please add some text to post before adding.");
    }
  };

  return (
    <div className="posts-main">
      <h1>Posts List</h1>
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="Enter post"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <br />
        <button type="submit">Add Post</button>
      </form>
      <div className="count-articles">
        <h1>Licznik postów: {postCount}</h1>
      </div>
      <PostsList
        postsList={posts}
        removeMethod={removePost}
        voteMethod={handleVote}
      />
    </div>
  );
}
export default PostsStates;
