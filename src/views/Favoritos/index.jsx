import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";

const Favoritos = () => {
  const favorites = useSelector((state) => state.products.favorites);
  const items = useSelector((state) => state.products.items);
  const favoritos = items.filter((producto) => favorites.includes(producto.id));

  if (!favoritos || favoritos.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minH="100vh"
        p={{ base: 2, md: 4 }}
      >
        <Text fontSize="xl" color="gray.500">
          No hay favoritos para mostrar.
        </Text>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      minH="100vh"
      p={{ base: 2, md: 4 }}
    >
      <Box maxW="1200px" width="100%">
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="left"
          mb={6}
          pl={{ base: 2, md: 4 }}
          bgGradient="linear(to-r, blue.500, purple.500)"
          bgClip="text"
        >
          Mis Favoritos ({favoritos.length})
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: 4, md: 6 }}
          width="100%"
          justifyItems="center"
          alignItems="stretch"
        >
          {favoritos.map((favorito) => (
            <ProductCard key={favorito.id} items={favorito} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Favoritos;