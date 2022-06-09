import './App.css';
import AllArtists from "./Components/AllArtists";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import ArtistDetails from "./Components/ArtistDetails";

function App() {
  return (

        <Router>
            <Routes>
                <Route path={"/"}  element={<Home/>}/>
                <Route path={"/artists"}  element={<AllArtists/>}/>
                <Route path={"/artists/:id"} element={<ArtistDetails/>}/>
                {/*<Route path="*" element={<Error/>}/>*/}
            </Routes>
        </Router>
      // <div>
      //     <p className={"display-1 text-center my-5"}>Hello</p>
      //     <div className="d-flex flex-column align-items-center justify-content-center">
      //         <AllArtists></AllArtists>
      //     </div>
      // </div>

  );
}

export default App;
