import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { DotLoader } from "react-spinners";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/admin", element: <AdminPage /> },
]);

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <div className="App">
      {loading ? (
        <div className="preloader">
          <DotLoader
            color="#000"
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
