import { forumData } from "../Database/forumData";

export const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      {forumData?.posts?.map(
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
          <div key={postId}>
            <div>
              <img />
              <p>Posted By</p>
              <p>@{username}</p>
            </div>
            <h2>{post}</h2>
            <div>
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
            <p>{postDescription}</p>
            <div>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-solid fa-bookmark"></i>
            </div>
          </div>
        )
      )}
    </div>
  );
};
