import { useData } from "../Contexts/DataProvider";

export const SortNav = () => {
  const { dispatch, state } = useData();
  return (
    <div>
      <h3>Sort By</h3>
      <select
        value={state?.sort}
        onChange={(event) => {
          console.log(event.target.value);
          dispatch({ type: "SORT_BY", payload: event.target.value });
        }}
      >
        <option>Latest Posts</option>
        <option>Most Upvoted</option>
      </select>
    </div>
  );
};
