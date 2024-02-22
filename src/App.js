import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgetpassword from './Component/Forgetpassword';
import Signup from './Component/Signup';
import Error404 from './Component/Error404';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
