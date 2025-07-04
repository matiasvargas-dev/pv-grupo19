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
  InputGroup,
  InputRightElement,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const RegisterLayout = ({ form, error, handleChange, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const bgGradient = useColorModeValue(
    "linear(to-br, purple.50, blue.50)",
    "linear(to-br, gray.900, purple.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmVisibility = () => setShowConfirm(!showConfirm);

  return (
    <Container maxW="md" py={8} px={4}>
      <Box
        minH="85vh"
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
                bgGradient="linear(to-r, purple.500, blue.500)"
                bgClip="text"
                fontWeight="bold"
              >
                Crear Cuenta
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Únete a la comunidad FakeStore
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
                    Nombre Completo
                  </FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "purple.300" }}
                    _focus={{
                      borderColor: "purple.500",
                      boxShadow: "0 0 0 1px purple.500",
                      bg: "white",
                    }}
                    borderRadius="lg"
                    size="lg"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontWeight="medium">
                    Género
                  </FormLabel>
                  <Select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    placeholder="Seleccione su género"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ borderColor: "purple.300" }}
                    _focus={{
                      borderColor: "purple.500",
                      boxShadow: "0 0 0 1px purple.500",
                      bg: "white",
                    }}
                    borderRadius="lg"
                    size="lg"
                  >
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                  </Select>
                </FormControl>

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
                    _hover={{ borderColor: "purple.300" }}
                    _focus={{
                      borderColor: "purple.500",
                      boxShadow: "0 0 0 1px purple.500",
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
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Mínimo 4 caracteres"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{ borderColor: "purple.300" }}
                      _focus={{
                        borderColor: "purple.500",
                        boxShadow: "0 0 0 1px purple.500",
                        bg: "white",
                      }}
                      borderRadius="lg"
                      size="lg"
                      pr="4.5rem"
                    />
                    <InputRightElement height="full">
                      <IconButton
                        aria-label="Mostrar contraseña"
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        size="sm"
                        color="gray.500"
                        _hover={{ color: "purple.500" }}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700" fontWeight="medium">
                    Confirmar Contraseña
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={showConfirm ? "text" : "password"}
                      name="confirm"
                      value={form.confirm}
                      onChange={handleChange}
                      placeholder="Repite tu contraseña"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{ borderColor: "purple.300" }}
                      _focus={{
                        borderColor: "purple.500",
                        boxShadow: "0 0 0 1px purple.500",
                        bg: "white",
                      }}
                      borderRadius="lg"
                      size="lg"
                      pr="4.5rem"
                    />
                    <InputRightElement height="full">
                      <IconButton
                        aria-label="Mostrar confirmación"
                        icon={showConfirm ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={toggleConfirmVisibility}
                        variant="ghost"
                        size="sm"
                        color="gray.500"
                        _hover={{ color: "purple.500" }}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="purple"
                  size="lg"
                  width="full"
                  borderRadius="lg"
                  bgGradient="linear(to-r, purple.500, purple.600)"
                  _hover={{
                    bgGradient: "linear(to-r, purple.600, purple.700)",
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
                  Crear Cuenta
                </Button>

                <Text textAlign="center" color="gray.600" fontSize="sm" pt={4}>
                  ¿Ya tienes una cuenta?{" "}
                  <ChakraLink
                    as={RouterLink}
                    to="/login"
                    color="purple.500"
                    fontWeight="semibold"
                    _hover={{
                      color: "purple.600",
                      textDecoration: "underline",
                    }}
                  >
                    Inicia sesión aquí
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

export default RegisterLayout;