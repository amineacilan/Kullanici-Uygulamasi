import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Users from "./pages/Dashboard/Users";
import Contact from "./pages/Dashboard/Contact";
import UserDetail from "./pages/Dashboard/UserDetail";
import DashboardLayout from "./components/layouts/Dashboard/index";
import Login from "./pages/Auth/Login";
import AuthLayout from "./components/layouts/Auth/index";
import Register from "./components/layouts/Auth/Register";
import Error404 from "./pages/Error404";
import Counter from "./components/Counter";

//pages
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />}></Route>
          <Route path="users/:id" element={<UserDetail />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
