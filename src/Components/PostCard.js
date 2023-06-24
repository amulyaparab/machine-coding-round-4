import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";
import { useEffect, useState } from "react";

export const PostCard = ({
  postId,
  username,
  name,
  picUrl,
  post,
  postDescription,
  upvotes,
  downvotes,
  tags,
  createdAt,
  isBookmarked,
}) => {
  const { upVoteHandler, downVoteHandler, state, dispatch } = useData();
  const navigate = useNavigate();

  return (
    <div className="post" key={postId}>
      <div className="votes">
        <i
          className={`${upvotes > downvotes && "purple"} fa-solid fa-caret-up`}
          onClick={() => upVoteHandler(postId)}
        ></i>
        <p>{upvotes - downvotes}</p>
        <i
          class={`${upvotes < downvotes && "red"} fa-solid fa-caret-down`}
          onClick={() => downVoteHandler(postId)}
        ></i>
      </div>
      <div>
        <div className="post-sections">
          <img src={picUrl} alt={username} />
          <p>Posted By</p>
          <p className="username">@{username}</p>
          {/* <p>{minutesAgo}m</p> */}
        </div>
        <h2>{post}</h2>
        <div className="post-sections">
          {tags.map((tag) => (
            <small className="tags">{tag}</small>
          ))}
        </div>
        <p>{postDescription}</p>
        <div className="post-sections actions">
          <i
            class="fa-regular fa-comment"
            onClick={() => navigate(`/singlePost/${postId}`)}
          ></i>
          <i class="fa-solid fa-share-nodes"></i>
          <i
            class={`fa-solid fa-bookmark ${isBookmarked && "purple"}`}
            onClick={() => dispatch({ type: "BOOKMARK", payload: postId })}
          ></i>
        </div>
      </div>
    </div>
  );
};
