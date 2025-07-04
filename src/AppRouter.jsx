import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./components/PrivateRoute";
import Detalle from "./views/Detalle";
import Favoritos from "./views/Favoritos";
import FormularioProducto from "./views/Formulario";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Contactos from "./views/Contactos";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contacto" element={<Contactos />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/favoritos" element={<PrivateRoute><Favoritos /></PrivateRoute>} />
            <Route path="/formulario" element={<PrivateRoute><FormularioProducto /></PrivateRoute>} />
            <Route path="/detalle/:id" element={<PrivateRoute><Detalle /></PrivateRoute>} />
            {/* Default */}
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
