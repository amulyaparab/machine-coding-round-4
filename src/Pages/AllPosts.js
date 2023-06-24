import { SideNav } from "../Components/SideNav";
import { SortNav } from "../Components/SortNav";
import { Posts } from "./Posts";

export const AllPosts = () => {
  return (
    <div className="page-fractions">
      <SideNav />
      <Posts />
      <SortNav />
    </div>
  );
};
