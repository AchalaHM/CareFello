
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Log from "./pages/Login";
import Home1 from "./components/Test";
import Login from "./components/Login";
import Reg from "./components/Register";
import Sel from "./pages/Select";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ManagerDashboard from './pages/ManagerDashboard';
import AddDoctor from './pages/AddDoctor';
import Caregiverlist from './pages/Caregiverlist';
import AddCaregiver from './pages/AddCaregiver';


function App() {
  return (
    <div className="App">

      <Router>


        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Log />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/log" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/sel" element={<Sel />} />

          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/AddCaregiver" element={<AddCaregiver />} />


          <Route path="/list" element={<Caregiverlist />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
