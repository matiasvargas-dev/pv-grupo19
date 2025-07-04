import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, fetchProducts } from "../../redux/products/productsSlice";
import { useEffect } from "react";
import HomeLayout from "./Layout";

const Home = () => {
  useEffect(() => {
    const scroll = sessionStorage.getItem("storeScroll");
    if (scroll) {
      window.scrollTo(0, Number(scroll, 10));
      sessionStorage.removeItem("storeScroll");
    }
  }, []);

  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchProducts());
  };

  if (loading) {
    return (
      <Center minH="90vh" flexDirection="column">
        <Spinner size="xl" thickness="4px" color="purple.500" speed="0.65s" />
        <Text mt={4} fontSize="xl" color="gray.600" fontWeight="medium">
          Cargando productos...
        </Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="90vh" p={4}>
        <VStack spacing={4} maxW="md">
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            <VStack align="start" spacing={2}>
              <AlertTitle>¡Ups! Algo salió mal</AlertTitle>
              <AlertDescription>
                No pudimos cargar los productos. Verifica tu conexión e intenta
                nuevamente.
              </AlertDescription>
            </VStack>
          </Alert>
          <Button
            colorScheme="blue"
            onClick={handleRetry}
            size="lg"
            borderRadius="full"
            _hover={{ transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            Intentar nuevamente
          </Button>
        </VStack>
      </Center>
    );
  }

  if (!items || items.length === 0) {
    return (
      <Box minH="100vh" display="flex" flexDirection="column">
        <Center flex="1">
          <VStack spacing={4}>
            <Text fontSize="xl" color="gray.500">
              No hay productos para mostrar.
            </Text>
            <Button
              colorScheme="blue"
              onClick={handleRetry}
              size="lg"
              borderRadius="full"
            >
              Recargar productos
            </Button>
          </VStack>
        </Center>
      </Box>
    );
  }

  return <HomeLayout items={items} />;
};

export default Home;
