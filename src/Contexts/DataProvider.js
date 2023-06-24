import { useContext, useReducer } from "react";
import { createContext } from "react";
import { forumData } from "../Database/forumData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const upVoteHandler = (postId) => {
    dispatch({ type: "UPVOTE", payload: postId });
  };
  const downVoteHandler = (postId) => {
    dispatch({ type: "DOWNVOTE", payload: postId });
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPVOTE":
        return {
          ...state,
          filteredForumData: state.filteredForumData.map((post) =>
            post.postId === action.payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        };
      case "DOWNVOTE":
        return {
          ...state,
          filteredForumData: state.filteredForumData.map((post) =>
            post.postId === action.payload
              ? {
                  ...post,
                  upvotes: post.upvotes - 1,
                  downvotes: post.downvotes + 1,
                }
              : post
          ),
        };
      case "BOOKMARK":
        return {
          ...state,
          filteredForumData: state.filteredForumData.map((post) =>
            post.postId === action.payload
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
        };
      case "SORT_BY":
        return action.payload === "Most Upvoted"
          ? {
              ...state,
              filteredForumData: state.forumPosts.sort(
                (a, b) => b.upvotes - a.upvotes
              ),
            }
          : {
              ...state,
              filteredForumData: state.forumPosts.sort(
                (a, b) => b.createdAt - a.createdAt
              ),
            };
      // : { ...state };

      default:
        return state;
    }
  };
  const initialState = {
    forumPosts: forumData.posts,
    filteredForumData: forumData.posts,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "stasytdasjtg");
  return (
    <DataContext.Provider
      value={{ upVoteHandler, downVoteHandler, state, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
