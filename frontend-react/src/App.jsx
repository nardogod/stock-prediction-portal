import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container text-center mt-5">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
