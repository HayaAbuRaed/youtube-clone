import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout, Home, Video, Channel, AfterSearch} from './components'
import Box from '@mui/material/Box';
import CategoryProvider from './components/Context/CategoryProvider';
 
const App = () => {
  return (
    <Box>
      <CategoryProvider>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route  path="/video/:id" element={<Video/>}/>
              <Route  path="/channel/:id" element={<Channel/>}/>
              <Route  path="/search/:searchResult" element={<AfterSearch/>}/>
              <Route  path="*" element={<> error 404 page not found </>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
      
    </Box>
  );
}

export default App;
