import Home from "./Home/Home";
import Login from "./Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useEffect } from "react";
import { jwtVerify } from "./utils/helper";
import { ManageSources } from "./sources/ManageSources";

function App() {

  useEffect(() => {
    jwtVerify()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/sources" element={<ManageSources />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;