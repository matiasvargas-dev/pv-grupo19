import { useEffect } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/products/productsSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
