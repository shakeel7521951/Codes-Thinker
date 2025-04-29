// App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Contacts from "./pages/Contacts";
import Clients from "./pages/Clients";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

// Set up router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/clients", element: <Clients /> },
      { path: "/team", element: <Team /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contacts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
