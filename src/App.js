import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";

import { Route, Routes } from "react-router-dom";
import { SinglePost } from "./Pages/SinglePost";
import { AllPosts } from "./Pages/AllPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/singlePost/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
