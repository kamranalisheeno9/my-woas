import './App.css';
import Home from './pages/home'
import MyWoas from './pages/mywoas'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/mywoa"
          element={<MyWoas />} />
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
