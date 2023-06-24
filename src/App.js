import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { SideNav } from "./Components/SideNav";
import { Posts } from "./Pages/Posts";
import { SortNav } from "./Components/SortNav";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-fractions">
        <SideNav />
        <Posts />
        <SortNav />
      </div>
    </div>
  );
}

export default App;
