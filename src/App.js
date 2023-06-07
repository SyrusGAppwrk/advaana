import Home from "./Home/Home";
import Login from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useEffect } from "react";
import { jwtVerify } from "./utils/helper";
import Header from "./Home/Header";

function App() {

  useEffect(() => {
    jwtVerify()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Header />
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;