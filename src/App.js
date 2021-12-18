import './App.css';
import Home from './pages/home'
import MyWoas from './pages/mywoas'
import Market from './pages/market'
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
        <Route
          path="/market"
          element={<Market />} />
        </Routes>
        </Router>
      
    </div>
  );
}

export default App;
