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
      maxW="6xl" // Cambiado de 7xl y responsive object
      px={{ base: 4, md: 6, lg: 8 }} // Padding más consistente
      py={{ base: 4, md: 6 }}
    >
      <Grid 
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
        gap={{ base: 6, md: 8 }}
        w="100%"
      >
        {/* Imagen del producto */}
        <GridItem>
          <Box
            bg={bgColor}
            borderRadius="xl"
            border="1px"
            borderColor={borderColor}
            p={{ base: 4, md: 6 }}
            position="relative"
            boxShadow="md"
            w="100%" // Asegurar que ocupe todo el ancho disponible
            mx="auto" // Centrar horizontalmente
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
            <Box
              w="100%"
              h={{ base: "250px", md: "350px", lg: "400px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={producto.image}
                alt={producto.title}
                maxW="100%"
                maxH="100%"
                objectFit="contain"
              />
            </Box>
          </Box>
        </GridItem>

        {/* Información del producto */}
        <GridItem>
          <VStack align="stretch" spacing={5} h="100%">
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
              <Heading 
                size={{ base: "md", md: "lg" }} 
                mb={2}
                lineHeight="1.2"
              >
                {producto.title}
              </Heading>
              <Text 
                fontSize={{ base: "2xl", md: "3xl" }} 
                fontWeight="bold" 
                color="blue.500"
              >
                ${producto.price}
              </Text>
            </Box>

            {/* Rating y stock */}
            <HStack 
              spacing={{ base: 4, md: 8 }}
              flexWrap="wrap"
              align="center"
            >
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
            <Box flex="1">
              <Heading size="md" mb={3}>
                Descripción
              </Heading>
              <Divider mb={3} />
              <Text 
                lineHeight="1.7" 
                color="gray.600"
                fontSize={{ base: "sm", md: "md" }}
              >
                {producto.description}
              </Text>
            </Box>

            {/* Estadísticas del producto */}
            <SimpleGrid 
              columns={3} 
              spacing={4} 
              pt={4}
              borderTop="1px"
              borderColor={borderColor}
            >
              <Stat textAlign="center">
                <StatLabel fontSize="xs">Calificación</StatLabel>
                <StatNumber fontSize="lg">{producto.rating?.rate || "N/A"}</StatNumber>
                <StatHelpText fontSize="xs">de 5 estrellas</StatHelpText>
              </Stat>
              <Stat textAlign="center">
                <StatLabel fontSize="xs">Reseñas</StatLabel>
                <StatNumber fontSize="lg">{producto.rating?.count || 0}</StatNumber>
                <StatHelpText fontSize="xs">compradores</StatHelpText>
              </Stat>
              <Stat textAlign="center">
                <StatLabel fontSize="xs">Disponibilidad</StatLabel>
                <StatNumber 
                  fontSize="lg"
                  color={`${stockInfo.color}.500`}
                >
                  {stockInfo.stock}
                </StatNumber>
                <StatHelpText fontSize="xs">{stockInfo.cantidad}</StatHelpText>
              </Stat>
            </SimpleGrid>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProductoDetalleLayout;
