import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../../../components/ProductCard";

const HomeLayout = ({ items }) => (
  <Box
    display="flex"
    justifyContent="center"
    w="100%"
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
        Nuestros Productos ({items.length})
      </Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={{ base: 4, md: 6 }}
        width="100%"
        justifyItems="center"
        alignItems="stretch"
      >
        {items.map((producto) => (
          <ProductCard key={producto.id} items={producto} />
        ))}
      </SimpleGrid>
    </Box>
  </Box>
);

export default HomeLayout;
