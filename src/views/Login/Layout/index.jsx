import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  Alert,
  AlertIcon,
  Link as ChakraLink,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LoginLayout = ({ form, error, handleChange, handleSubmit }) => {
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, purple.50)",
    "linear(to-br, gray.900, blue.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Container maxW="md" py={12} px={4}>
      <Box
        minH="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient={bgGradient}
        borderRadius="2xl"
        p={8}
      >
        <Card
          maxW="md"
          w="full"
          bg={cardBg}
          boxShadow="2xl"
          borderRadius="xl"
          border="1px solid"
          borderColor="gray.100"
        >
          <CardHeader textAlign="center" pb={2}>
            <VStack spacing={4}>
              <Image
                src="/logo.png"
                alt="Logo"
                height="60px"
                filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
              />
              <Heading
                size="lg"
                bgGradient="linear(to-r, blue.500, purple.500)"
                bgClip="text"
                fontWeight="bold"
              >
                Iniciar Sesión
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Ingresa a tu cuenta de FakeStore
              </Text>
            </VStack>
          </CardHeader>

          <CardBody pt={2}>
            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={4}>
                {error && (
                  <Alert status="error" borderRadius="lg" fontSize="sm">
                    <AlertIcon />
                    {error}
                  </Alert>
                )}

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontWeight="medium">
                    Correo Electrónico
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      bg: "white",
                    }}
                    borderRadius="lg"
                    size="lg"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontWeight="medium">
                    Contraseña
                  </FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Tu contraseña"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      bg: "white",
                    }}
                    borderRadius="lg"
                    size="lg"
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  borderRadius="lg"
                  bgGradient="linear(to-r, blue.500, blue.600)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, blue.700)",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.2s"
                  fontWeight="bold"
                  mt={2}
                >
                  Iniciar Sesión
                </Button>

                <Text textAlign="center" color="gray.600" fontSize="sm" pt={4}>
                  ¿No tienes una cuenta?{" "}
                  <ChakraLink
                    as={RouterLink}
                    to="/register"
                    color="blue.500"
                    fontWeight="semibold"
                    _hover={{
                      color: "blue.600",
                      textDecoration: "underline",
                    }}
                  >
                    Regístrate aquí
                  </ChakraLink>
                </Text>
              </VStack>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginLayout;