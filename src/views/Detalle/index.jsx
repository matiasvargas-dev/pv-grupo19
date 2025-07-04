import { useParams, useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/products/productsSlice";
import { useToastManager } from "../../hooks/useToastManager";
import ProductoDetalleLayout from "./Layout/ProductDetalle";

const Detalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productos = useSelector((state) => state.products.items);
  const favorites = useSelector((state) => state.products.favorites);
  const dispatch = useDispatch();
  const { showFavoriteToast } = useToastManager();

  const producto = productos.find((prod) => prod.id === Number(id));
  const isFavorite = producto ? favorites.includes(producto.id) : false;

  const handleFavoriteToggle = () => {
    if (!producto) return;
    showFavoriteToast(producto.title, !isFavorite);
    dispatch(toggleFavorite(producto.id));
  };

  if (!producto) {
    return (
      <Box textAlign="center" mt={10}>
        Producto no encontrado
      </Box>
    );
  }

  return (
    <Box mt={3}>
      <Box>
        <Button mt={3} onClick={() => navigate(-1)} mb={5}>
          Volver al store
        </Button>
      </Box>
      <ProductoDetalleLayout
        producto={producto}
        isFavorite={isFavorite}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </Box>
  );
};

export default Detalle;
