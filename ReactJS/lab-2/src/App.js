import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";


function App() {
  return (
      <Router>
          <nav className="navbar navbar-dark bg-dark bg-gradient mb-4">
              <div className="container-fluid">
                  <div className="d-flex align-items-center justify-content-evenly col-12">
                      <div><a className=" nav-link fs-2 text-white" aria-current="page" href="/">Home</a></div>
                      <div><a className=" nav-link fs-2 text-white" aria-current="page" href="/about">About</a></div>
                      <div><a className=" nav-link fs-2 text-white" aria-current="page" href="/error">Errors</a></div>
                  </div>
              </div>
          </nav>
          <div className="container">
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/error'} element={<Error/>}/>
        </Routes>
          </div>
      </Router>
  );
}

export default App;
