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
// import Clients from "./pages/Clients";
import Service from "./pages/Service";
import ServiceDetail from "./components/services/ServicesDetail";
import Projeects from "../src/pages/Projects";
import { useProfileQuery } from "./redux/slices/UserApi";
import { useDispatch } from "react-redux";
import { clearProfile, setProfile } from "./redux/slices/UserSlice";
import { useEffect } from "react";

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
      { path: "/services", element: <Service /> },
      { path: "/servicedetail/:id", element: <ServiceDetail /> },
      // { path: "/clients", element: <Clients /> },
      { path: "/team", element: <Team /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/projects", element: <Projeects /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const { data: profileData } = useProfileQuery();

  useEffect(() => {
    if (profileData) {
      dispatch(setProfile(profileData.user));
    } else {
      dispatch(clearProfile());
    }
  }, [profileData, dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
