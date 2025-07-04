import { IconButton, Tooltip } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const FavButton = ({ isFavorite, onClick, ...props }) => (
  <Tooltip label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"} hasArrow>
    <IconButton
      icon={<FaHeart color={isFavorite ? '#E53E3E' : '#A0AEC0'} size={22} />}
      variant="ghost"
      colorScheme={isFavorite ? 'red' : 'gray'}
      size="sm"
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      p={1}
      {...props}
      onClick={onClick}
    />
  </Tooltip>
);

export default FavButton;
