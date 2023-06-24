export const SortNav = () => {
  return (
    <div>
      <h3>Sort By</h3>
      <select>
        <option>
          <i class="fa-solid fa-fire"></i>
          <p>Latest Posts</p>
        </option>
        <option>
          <i class="fa-solid fa-up"></i>
          <p>Most Upvoted</p>
        </option>
      </select>
    </div>
  );
};
