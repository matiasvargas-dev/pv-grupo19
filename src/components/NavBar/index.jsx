import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link as ChakraLink,
  Image,
  Avatar,
  Text,
  VStack,
  Divider,
  useOutsideClick,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AiFillHome, AiFillHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";
import { useState, useRef } from "react";

const links = [
  { name: "Inicio", path: "/", icon: <AiFillHome /> },
  { name: "Favoritos", path: "/favoritos", icon: <AiFillHeart /> },
  {
    name: "Crear Producto",
    path: "/formulario",
    icon: <AiOutlinePlusCircle />,
  },
];

const NavLink = ({ path, children, icon }) => (
  <ChakraLink
    as={RouterLink}
    to={path}
    px={3}
    py={2}
    gap={2}
    mx={5}
    rounded={"md"}
    display="flex"
    alignItems="center"
    _hover={{ textDecoration: "none", bg: "black" }}
    _activeLink={{ fontWeight: "bold", color: "teal.300" }}
  >
    {icon}
    {children}
  </ChakraLink>
);

// Componente para el dropdown del usuario
const UserDropdown = ({ user, onLogout, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef();

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="relative" ref={dropdownRef}>
      {/* Botón circular con el icono */}
      <Box
        as="button"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        bg="white"
        borderRadius="50%"
        width="40px"
        height="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        transition="all 0.2s ease"
        _hover={{
          bg: isHovered ? "black" : "white",
          transform: "scale(1.05)",
        }}
        boxShadow="md"
      >
        <FaUserAlt
          size={20}
          style={{
            color: isHovered
              ? "white"
              : user.gender === "female"
                ? "#DDA0DD"
                : "#87CEEB", // Colores pastel
          }}
        />
      </Box>

      {/* Dropdown Menu */}
      {isOpen && (
        <Box
          position="absolute"
          top="calc(100% + 8px)"
          right={isMobile ? "auto" : "0"}
          left={isMobile ? "50%" : "auto"}
          transform={isMobile ? "translateX(-50%)" : "none"}
          width={isMobile ? "280px" : "250px"}
          maxWidth={isMobile ? "90vw" : "250px"}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="lg"
          boxShadow="xl"
          p={4}
          zIndex={1000}
        >
          <VStack align="stretch" spacing={3}>
            {/* Información del usuario */}
            <Box>
              <HStack spacing={3}>
                <Avatar
                  size="md"
                  name={user.name}
                  bg={user.gender === "female" ? "purple.300" : "blue.300"}
                  color="white"
                />
                <Box flex="1" minWidth="0">
                  <Text fontWeight="semibold" fontSize="sm" color="gray.800">
                    {user.name}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    isTruncated
                    maxWidth="100%"
                  >
                    {user.email || "usuario@ejemplo.com"}
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Divider />

            {/* Opciones del menú */}
            <VStack align="stretch" spacing={2}>
              <Box
                as="button"
                display="flex"
                alignItems="center"
                gap={3}
                px={3}
                py={2}
                borderRadius="md"
                _hover={{ bg: "gray.100" }}
                color="gray.700"
                fontSize="sm"
              >
                <FaUserAlt size={14} />
                <Text>Mi Perfil</Text>
              </Box>
            </VStack>

            <Divider />

            {/* Botón de Cerrar Sesión */}
            <Box
              as="button"
              display="flex"
              alignItems="center"
              gap={3}
              px={3}
              py={2}
              borderRadius="md"
              _hover={{ bg: "red.50" }}
              color="red.500"
              fontSize="sm"
              onClick={onLogout}
            >
              <FiLogOut size={14} />
              <Text>Cerrar Sesión</Text>
            </Box>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.auth && state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("sessionUser");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box bg="blue.500" px={4} mt={4} mx={2} color="white" borderRadius={"1rem"}>
      <Flex
        h={16}
        px={4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ChakraLink as={RouterLink} to="/">
          <Image
            height="50px"
            src="/logo.png"
            alt="Logo de FakeStore"
            title="FakeStore Logo"
            pr={8}
            filter="drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.45))"
            cursor="pointer"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </ChakraLink>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Abrir menú"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
        />

        <HStack
          spacing={4}
          fontFamily={"Onyra, arial, sans-serif"}
          display={{ base: "none", md: "flex" }}
        >
          {user &&
            links.map((link) => (
              <NavLink key={link.name} path={link.path} icon={link.icon}>
                {link.name}
              </NavLink>
            ))}
          {user ? (
            <>
              {/* Aquí está el cambio principal - solo el componente UserDropdown */}
              <UserDropdown
                user={user}
                onLogout={handleLogout}
                isMobile={false}
              />
            </>
          ) : (
            <>
              <NavLink path="/login">Iniciar Sesión</NavLink>
              <NavLink path="/register">Registrarse</NavLink>
            </>
          )}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          fontFamily={"Onyra"}
          letterSpacing={2}
          display={{ md: "none" }}
        >
          <Stack as={"nav"} spacing={2}>
            {user && (
              <>
                {links.map((link) => (
                  <NavLink key={link.name} path={link.path} icon={link.icon}>
                    {link.name}
                  </NavLink>
                ))}
              </>
            )}
            {user ? (
              <>
                {/* Para móvil también usamos el dropdown */}
                <Box
                  mx={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <UserDropdown
                    user={user}
                    onLogout={handleLogout}
                    isMobile={true}
                  />
                </Box>
              </>
            ) : (
              <>
                <NavLink path="/login">Login</NavLink>
                <NavLink path="/register">Registrarse</NavLink>
              </>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;

