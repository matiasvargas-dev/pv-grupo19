// hooks/useToastManager.js
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { undoRemoveFavorite } from "../redux/products/productsSlice";

export const useToastManager = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);

  const showFavoriteToast = (productId, isAdding) => {
    const product = items.find((item) => item.id === productId);
    const productName = product ? product.title : "Producto";

    if (isAdding) {
      // Toast cuando se agrega a favoritos
      toast({
        title: "¡Agregado a favoritos! ❤",
        description: `${productName} se agregó a tus favoritos`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
        render: ({ onClose }) => (
          <Box
            color="white"
            p={4}
            bg="green.500"
            borderRadius="lg"
            boxShadow="xl"
            border="2px solid"
            borderColor="green.300"
          >
            <HStack spacing={3}>
              <Box fontSize="24px">❤</Box>
              <VStack spacing={1} align="start" flex="1">
                <Text fontWeight="bold" fontSize="sm">
                  ¡Agregado a favoritos!
                </Text>
                <Text fontSize="xs" opacity={0.9}>
                  {productName.length > 40
                    ? `${productName.substring(0, 40)}...`
                    : productName}
                </Text>
              </VStack>
              <CloseButton
                size="sm"
                onClick={onClose}
                color="white"
                _hover={{ bg: "green.600" }}
              />
            </HStack>
          </Box>
        ),
      });
    } else {
      // Toast cuando se remueve de favoritos CON botón de undo
      toast({
        title: "Removido de favoritos",
        description: "Toca 'Deshacer' si fue un error",
        status: "info",
        duration: 5000, // Más tiempo para poder hacer undo
        isClosable: true,
        position: "bottom-right",
        render: ({ onClose }) => (
          <Box
            color="white"
            p={4}
            bg="blue.500"
            borderRadius="lg"
            boxShadow="xl"
            border="2px solid"
            borderColor="blue.300"
          >
            <VStack spacing={3} align="stretch">
              <HStack spacing={3}>
                <Box fontSize="20px">💔</Box>
                <VStack spacing={1} align="start" flex="1">
                  <Text fontWeight="bold" fontSize="sm">
                    Removido de favoritos
                  </Text>
                  <Text fontSize="xs" opacity={0.9}>
                    {productName.length > 35
                      ? `${productName.substring(0, 35)}...`
                      : productName}
                  </Text>
                </VStack>
                <CloseButton
                  size="sm"
                  onClick={onClose}
                  color="white"
                  _hover={{ bg: "blue.600" }}
                />
              </HStack>
              <HStack spacing={2}>
                <Button
                  size="xs"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  color="white"
                  borderColor="white"
                  _hover={{ bg: "whiteAlpha.200" }}
                  onClick={() => {
                    dispatch(undoRemoveFavorite());
                    onClose();
                    // Mostrar confirmación de que se deshizo la acción
                    toast({
                      title: "¡Restaurado! ❤",
                      description: "El producto volvió a tus favoritos",
                      status: "success",
                      duration: 2000,
                      position: "bottom-right",
                    });
                  }}
                >
                  ↺ Deshacer
                </Button>
                <Text fontSize="xs" opacity={0.7} flex="1">
                  Este mensaje se cierra automáticamente
                </Text>
              </HStack>
            </VStack>
          </Box>
        ),
      });
    }
  };

  const showErrorToast = (message) => {
    toast({
      title: "¡Ups! Algo salió mal",
      description: message,
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  const showLoadingToast = () => {
    return toast({
      title: "Cargando productos...",
      description: "Por favor espera un momento",
      status: "loading",
      duration: null, // No se cierra automáticamente
      isClosable: false,
      position: "top",
    });
  };

  const showSuccessToast = (title, description) => {
    toast({
      title,
      description,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return {
    showFavoriteToast,
    showErrorToast,
    showLoadingToast,
    showSuccessToast,
  };
};

// Necesitarás estos imports adicionales en la parte superior del archivo:
import {
  Box,
  Button,
  CloseButton,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";

