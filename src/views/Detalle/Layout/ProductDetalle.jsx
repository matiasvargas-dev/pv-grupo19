import {
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import RatingStars from "../../../components/RatingStars";
import FavButton from "../../../components/FavButton";

const getStockInfo = (ratingCount) => {
  if (ratingCount > 200)
    return { stock: "Alto", color: "green", cantidad: "25+" };
  if (ratingCount > 100)
    return { stock: "Medio", color: "yellow", cantidad: "10-25" };
  if (ratingCount > 50)
    return { stock: "Bajo", color: "orange", cantidad: "5-10" };
  return { stock: "Muy Bajo", color: "red", cantidad: "1-5" };
};

const ProductoDetalleLayout = ({ producto, isFavorite, onFavoriteToggle }) => {
  const stockInfo = getStockInfo(producto.rating?.count || 0);
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Container
      maxW={{ base: "100%", md: "7xl" }}
      w="100%"
      px={{ base: 2, md: 8 }}
      py={{ base: 4, md: 8 }}
    >
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
        {/* Imagen del producto */}
        <GridItem>
          <Box
            bg={bgColor}
            borderRadius="2xl"
            border="1px"
            borderColor={borderColor}
            p={4}
            position="relative"
            boxShadow="lg"
            mx={10}
          >
            <FavButton
              isFavorite={isFavorite}
              onClick={onFavoriteToggle}
              position="absolute"
              top="16px"
              right="16px"
              zIndex={2}
              size="md"
            />
            <Image
              src={producto.image}
              alt={producto.title}
              w="100%"
              maxW="100%"
              h={{ base: "200px", md: "300px" }}
              objectFit="contain"
            />
          </Box>
        </GridItem>

        {/* Información del producto */}
        <GridItem>
          <VStack align="stretch" spacing={5}>
            {/* Título y precio */}
            <Box>
              <Badge
                colorScheme="purple"
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
                mb={3}
                textTransform="uppercase"
                letterSpacing="wider"
              >
                {producto.category}
              </Badge>
              <Heading size="lg" mb={2}>
                {producto.title}
              </Heading>
              <Text fontSize="3xl" fontWeight="bold" color="blue.500">
                ${producto.price}
              </Text>
            </Box>

            {/* Rating y stock */}
            <HStack spacing={8}>
              <Box>
                {producto.rating && (
                  <RatingStars
                    rate={producto.rating.rate}
                    count={producto.rating.count}
                  />
                )}
              </Box>
              <Badge
                colorScheme={stockInfo.color}
                fontSize="sm"
                px={3}
                py={1}
                borderRadius="full"
              >
                Stock: {stockInfo.stock} ({stockInfo.cantidad} unidades)
              </Badge>
            </HStack>

            <Divider />

            {/* Descripción */}
            <Box>
              <Heading size="md" mb={3}>
                Descripción
                <Divider />
              </Heading>
              <Text lineHeight="1.8" color="gray.600" mx={"2px"} px={4}>
                {producto.description}
              </Text>
            </Box>

            {/* Estadísticas del producto */}
            <SimpleGrid columns={3} spacing={4} mb={"20px"}>
              <Stat>
                <StatLabel>Calificación</StatLabel>
                <StatNumber>{producto.rating?.rate || "N/A"}</StatNumber>
                <StatHelpText>de 5 estrellas</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Reseñas</StatLabel>
                <StatNumber>{producto.rating?.count || 0}</StatNumber>
                <StatHelpText>compradores</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Disponibilidad</StatLabel>
                <StatNumber color={`${stockInfo.color}.500`}>
                  {stockInfo.stock}
                </StatNumber>
                <StatHelpText>{stockInfo.cantidad}</StatHelpText>
              </Stat>
            </SimpleGrid>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProductoDetalleLayout;
