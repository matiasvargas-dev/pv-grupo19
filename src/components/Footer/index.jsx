import { Box, Text, HStack, Link as ChakraLink, Image } from "@chakra-ui/react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => (
  <footer>
    <Box
      as="footer"
      bg="blue.500"
      color="white"
      py={4}
      borderRadius="2rem 2rem 0 0"
      width="100%"
      position="relative"
    >
      <HStack
        justifyContent="center"
        spacing={{ base: 1, md: 8 }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          height={{ base: "2.7rem", md: "3.2rem" }}
          objectFit="contain"
          mb={{ base: 2, md: 0 }}
          filter="drop-shadow(0px 4px 12px rgba(0,0,0,0.45))"
        />
        <Text fontSize={{ base: "12px", md: "md" }} textAlign="center">
          &copy; {new Date().getFullYear()} Grupo 19 - Programación Visual
        </Text>
        <ChakraLink
          href="https://github.com/martinezcabj12/pv_tp_integrador_grupo19"
          isExternal
          color="white"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          fontSize={{ base: "sm", md: "md" }}
          mt={{ base: 2, md: 0 }}
        >
          <FaGithub /> GitHub
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to="/contacto"
          color="white"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          fontSize={{ base: "sm", md: "md" }}
          mt={{ base: 2, md: 0 }}
        >
          <FaEnvelope /> Contacto
        </ChakraLink>
      </HStack>
    </Box>
  </footer>
);

export default Footer;
