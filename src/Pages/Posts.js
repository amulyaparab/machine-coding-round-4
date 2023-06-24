import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";

export const Posts = () => {
  const { upVoteHandler, downVoteHandler, state } = useData();
  const navigate = useNavigate();
  return (
    <div className="all-posts">
      <h1>Posts</h1>
      {state?.filteredForumData?.map(
        ({
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
          comments,
          isBookmarked,
        }) => (
          <div className="post" key={postId}>
            <div className="votes">
              <i
                class="fa-solid fa-caret-up"
                onClick={() => upVoteHandler(postId)}
              ></i>
              <p>{upvotes > downvotes ? upvotes : `-${upvotes}`}</p>
              <i
                class="fa-solid fa-caret-down"
                onClick={() => downVoteHandler(postId)}
              ></i>
            </div>
            <div>
              <div className="post-sections">
                <img src={picUrl} alt={username} />
                <p>Posted By</p>
                <p>@{username}</p>
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
                  onClick={() => navigate("/singlePost")}
                ></i>
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-bookmark"></i>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
