import Login from "./components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}/> {/*Dashoboard Administracio*/}
        <Route path="/dashboard2" element={<Dashboard2 />}/> {/*Dashoboard Usuario Normal*/}
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
