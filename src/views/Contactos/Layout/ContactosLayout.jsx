import {
  SimpleGrid,
  Box,
  Avatar,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";

//recibe un array de contactos por props.
const ContactosLayout = ({ contactos }) => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} p={6}>
    {contactos.map((contacto) => (
      //tarjetas
      <Box
        key={contacto.github}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        p={6}
        textAlign="center"
        bg="white"
        _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
        transition="all 0.2s ease-in-out"
      >
        {/*avatar, nombre y boton*/}
        <VStack spacing={4}>
          <Avatar size="xl" src={contacto.imagen} name={contacto.nombre} />
          <Text fontWeight="bold" fontSize="lg">
            {contacto.nombre}
          </Text>
          <Button
            as="a"
            href={contacto.github}
            target="_blank"
            colorScheme="teal"
            variant="solid"
          >
            Ver GitHub
          </Button>
        </VStack>
      </Box>
    ))}
  </SimpleGrid>
);

export default ContactosLayout;
