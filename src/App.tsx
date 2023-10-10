import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthContext } from "./context/AuthContext";
import { Home } from "./pages/Home";

function App() {
  const { isConnected } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={!isConnected ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isConnected ? <Register></Register> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
