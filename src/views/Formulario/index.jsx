import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/products/productsSlice";
import { useToastManager } from "../../hooks/useToastManager";
import FormularioProductoLayout from "./Layout";

const FormularioProducto = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const { showErrorToast, showSuccessToast } = useToastManager();
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [imgError, setImgError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "image") setImgError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.category || !form.image) {
      showErrorToast("Por favor, llena todos los campos requeridos.");
      return;
    }
    if (imgError) {
      showErrorToast(
        "No se pudo cargar la imagen. Verifica la URL antes de crear el producto.",
      );
      return;
    }
    dispatch(
      createProduct({
        ...form,
        price: Number.parseFloat(form.price),
      }),
    );
    showSuccessToast(
      "Producto Creado",
      `El producto "${form.title}" fue creado exitosamente.`,
    );
    setForm({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
    setImgError(false);
  };

  return (
    <FormularioProductoLayout
      form={form}
      imgError={imgError}
      setImgError={setImgError}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default FormularioProducto;
