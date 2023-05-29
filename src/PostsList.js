import React, { Component, useState } from "react";
import ReactDOM from "react-dom/client";
import "./PostsList.css";
import Voting from "./Voting";

function PostsList(props) {
  let postsList = props.postsList;

  const handleRemovePost = (index) => {
    props.removeMethod(index);
  };

  const handleVote = (index, voteType) => {
    props.voteMethod(index, voteType);
  };

  let postsElement = postsList.map((post, index) => {
    return (
      <li key={index}>
        <div className="content">
          <p>{post.content}</p>
        </div>
        <br />
        <div className="votes">
          <Voting
            upVotes={post.upVotes}
            downVotes={post.downVotes}
            index={index}
            handleVote={handleVote}
          />
        </div>
        <span onClick={() => handleRemovePost(index)}>Delete</span>
      </li>
    );
  });
  return <ul className="list">{postsElement}</ul>;
}
export default PostsList;
