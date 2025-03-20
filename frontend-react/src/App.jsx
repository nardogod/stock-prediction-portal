import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AuthProvider from "./AuthProvider";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main className="container text-center mt-5">
          <Routes>
            {/* Rotas Públicas */}
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Rotas Privadas */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* Página Inicial (Acessível para todos) */}
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
