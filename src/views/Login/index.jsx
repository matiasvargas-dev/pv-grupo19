import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import LoginLayout from "./Layout";
import { useToastManager } from "../../hooks/useToastManager";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showSuccessToast } = useToastManager();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );
    if (user) {
      localStorage.setItem("sessionUser", JSON.stringify(user));
      dispatch(loginSuccess(user));
      showSuccessToast(`¡Bienvenid${user.gender === "female" ? "a" : "o"}, ${user.name}!`, "Has iniciado sesión correctamente.");
      navigate("/");
    } else {
      setError("Credenciales inválidas");
      dispatch(loginFailure("Credenciales inválidas"));
    }
  };

  return (
    <LoginLayout
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
