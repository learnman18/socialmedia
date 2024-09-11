import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Users from "./components/users/Users";
import User from "./components/users/User";
import IndividualUserPost from "./components/users/IndividualUserPost";


function App() {
  // console.log("inside app.js")
  return (
    <div className="dark:bg-slate-800 text-white" style={{minHeight:"100vh"}}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Users></Users>}></Route>
          <Route path="users/:id" element={<User></User>}></Route>
          <Route path="posts/:postCommentId" element={<IndividualUserPost></IndividualUserPost>}></Route>
        </Routes>
    </div>
  );
}

export default App;