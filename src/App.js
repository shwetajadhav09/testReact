import './App.css';
// import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route} from "react-router-dom";
import { Home,About, Blog } from './components/F2';

function App() {
  return (
    <div>
      {/* <F1 /> */}
      {/* <Nav /> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
