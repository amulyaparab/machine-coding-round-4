import { useData } from "../Contexts/DataProvider";
import { PostCard } from "../Components/PostCard";

export const Posts = () => {
  const { state, dispatch } = useData();

  return (
    <div className="all-posts">
      <h1>Posts</h1>
      {state?.filteredForumData?.map((post) => (
        <PostCard {...post} />
      ))}
    </div>
  );
};
