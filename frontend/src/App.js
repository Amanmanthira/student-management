import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './views/Register';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
