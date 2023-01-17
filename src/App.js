import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DotLoader } from "react-spinners";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/admin", element: <AdminPage /> },
]);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[])
  

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          loading
            ? { opacity: 1, display: "flex" }
            : { opacity: 0, display: "none" }
        }
        className="preloader"
      >
        <DotLoader
          color="#000"
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={
          loading
            ? { opacity: 0, display: "none" }
            : { opacity: 1, display: "block" }
        }
      >
        <RouterProvider router={router} />
      </motion.div>
    </div>
  );
}

export default App;
