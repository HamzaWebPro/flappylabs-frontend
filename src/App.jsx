import React from "react";
import Navbar from "./components/navbar/Navbar";
import FlappyLabs from "./pages/flappylabs/FlappyLabs";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Admin from "./pages/admin/Admin";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<FlappyLabs />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <div style={{backgroundImage:"url(https://testing.thernloven.com/examples/wp-content/uploads/2023/03/AdobeStock_325328393-scaled.jpeg)"}} className="bg-cover bg-center bg-no-repeat bg-fixed">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
