import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";

export const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const FormularioProductoLayout = ({
  form,
  imgError,
  setImgError,
  loading,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Box as="form" onSubmit={handleSubmit} maxW="1000px" mx="auto" p={8}>
      <Heading
        as="h1"
        size="xl"
        mb={8}
        textAlign="center"
        bgGradient="linear(to-r, blue.500, purple.500)"
        bgClip="text"
      >
        Crear Nuevo Producto
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Columna Izquierda */}
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input name="title" value={form.title} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Precio</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                <FaDollarSign />
              </InputLeftElement>
              <Input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                pl={10}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Categoría</FormLabel>
            <Select
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Seleccionar categoría"
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Descripción</FormLabel>
            <Textarea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
        {/* Columna Derecha */}
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Imagen (URL)</FormLabel>
            <Input name="image" value={form.image} onChange={handleChange} />
          </FormControl>
          <FormLabel>Vista Previa</FormLabel>
          <Box
            w="100%"
            h="250px"
            borderWidth={2}
            borderRadius="md"
            borderColor="gray.200"
            borderStyle="dashed"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
          >
            {form.image ? (
              <Image
                src={form.image}
                alt="Vista previa"
                maxH="100%"
                objectFit="contain"
                onError={() => setImgError(true)}
                onLoad={() => setImgError(false)}
              />
            ) : (
              <Text color="gray.400">La imagen aparecerá aquí</Text>
            )}
          </Box>
          {typeof imgError === "boolean" && imgError && (
            <Text color="red.500" fontSize="sm" mt={2}>
              No se pudo cargar la imagen. Verifica la URL.
            </Text>
          )}
        </VStack>
      </SimpleGrid>
      <Button mt={8} colorScheme="blue" type="submit" isLoading={loading}>
        Crear Producto
      </Button>
    </Box>
  );
};

export default FormularioProductoLayout;
