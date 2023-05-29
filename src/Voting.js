import React, { useState } from "react";

function Voting(props) {
  const { upVotes, downVotes, index, handleVote } = props;

  const handleUpvote = () => {
    handleVote(index, "upvote");
  };

  const handleDownvote = () => {
    handleVote(index, "downvote");
  };

  return (
    <div>
      <button onClick={handleUpvote}>Upvote</button>
      {upVotes}
      <button onClick={handleDownvote}>Downvote</button>
      {downVotes}
    </div>
  );
}

export default Voting;
