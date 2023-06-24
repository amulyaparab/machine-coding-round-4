import { useParams } from "react-router-dom";
import { SideNav } from "../Components/SideNav";
import { SortNav } from "../Components/SortNav";
import { useData } from "../Contexts/DataProvider";
import { PostCard } from "../Components/PostCard";
export const SinglePost = () => {
  const { postId } = useParams();
  const { state } = useData();
  const findPost = state.filteredForumData?.find(
    (post) => post.postId === postId
  );

  console.log(findPost, "fhdyhfkjah");
  return (
    <div className="page-fractions">
      <SideNav />
      <div className="all-posts">
        <PostCard {...findPost} />
        <div>
          {findPost.comments.length ? (
            findPost.comments.map((comment) => (
              <div className="comment">
                <img src={comment?.picUrl} alt={comment.username} />
                <div>
                  <div className="name-username">
                    <h4>{comment?.name}</h4>
                    <div className="username">@{comment?.username}</div>
                  </div>
                  <p className="username">Replying to @{findPost.username}</p>
                  <h4>{comment?.comment}</h4>
                </div>
              </div>
            ))
          ) : (
            <h4>No comments on this post yet.</h4>
          )}
        </div>
      </div>
      <SortNav />
    </div>
  );
};
