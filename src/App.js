import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Information from "./Components/Information";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="app">
      <Header
      />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/info" element={<Information/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
