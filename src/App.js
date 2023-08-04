import "./App.css";
import Navbar from "./components/Navbar";
// import Memeitems from './components/Memeitems';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <Outlet />

      {/* <Routes>
        <Route exact path='/editmeme' element={<Memeeditor />} />
        <Route exact path='/' element={<HomepageMemes memes={memes}/>} />
      </Routes> */}
    </div>
  );
}

export default App;
