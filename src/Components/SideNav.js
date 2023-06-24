export const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="tab">
        <i class="fa-solid fa-house"></i>
        <h3>Home</h3>
      </div>
      <div className="tab">
        <i class="fa-solid fa-rocket"></i>
        <h3>Explore</h3>
      </div>
      <div className="tab">
        <i class="fa-regular fa-bookmark"></i>
        <h3>Bookmarks</h3>
      </div>
      <div className="tab">
        <i class="fa-regular fa-user"></i>
        <h3>Profile</h3>
      </div>
    </div>
  );
};
