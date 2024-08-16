import Header from "./components/Header";
import Users from "./components/users/Users";


function App() {
  return (
    <div className="dark:bg-slate-800 text-white" style={{minHeight:"100vh"}}>
        <Header></Header>
        <Users></Users>
    </div>
  );
}

export default App;
