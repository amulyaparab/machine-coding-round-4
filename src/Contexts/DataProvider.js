import { useContext, useEffect, useReducer, useState } from "react";
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
          forumPosts: state.forumPosts.map((post) =>
            post.postId === action.payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
          filteredForumData: state.filteredForumData.map((post) =>
            post.postId === action.payload
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        };
      case "DOWNVOTE":
        return {
          ...state,
          forumPosts: state.forumPosts?.map((post) =>
            post.postId === action.payload
              ? {
                  ...post,
                  upvotes: post.upvotes - 1,
                  downvotes: post.downvotes + 1,
                }
              : post
          ),
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
          forumPosts: state.forumPosts.map((post) =>
            post.postId === action.payload
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
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
              sort: "Most Upvoted",
              filteredForumData: state.forumPosts.sort(
                (a, b) => b.upvotes - a.upvotes
              ),
            }
          : {
              ...state,
              sort: "Latest Posts",
              filteredForumData: state.forumPosts.sort((a, b) => {
                if (b.createdAt < a.createdAt) {
                  return -1; // a should come before b
                } else if (b.createdAt > a.createdAt) {
                  return 1; // a should come after b
                } else {
                  return 0; // a and b are equal in terms of order
                }
              }),
            };
      // : { ...state };

      default:
        return state;
    }
  };
  const initialState = {
    forumPosts: forumData.posts,
    filteredForumData: forumData.posts,
    sort: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, "stasytdasjtg");

  return (
    <DataContext.Provider
      value={{
        upVoteHandler,
        downVoteHandler,
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
