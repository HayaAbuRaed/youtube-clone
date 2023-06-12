import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout, Home, Video, Channel, AfterSearch} from './components'
import Error from './Pages/Error/Error';
 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout/>}>
            <Route  index element={<Home/>}/>
            <Route  path="/video/:id" element={<Video/>}/>
            <Route  path="/channel/:id" element={<Channel/>}/>
            <Route  path="/search/:searchResult" element={<AfterSearch/>}/>
            <Route  path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
