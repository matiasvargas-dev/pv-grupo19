import React, { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import {
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { categorias } from "../views/Formulario/Layout";

const ProductEditDrawer = ({
  isOpen,
  onClose,
  product,
  onSave,
  isSubmitting,
}) => {
  const [editData, setEditData] = useState(product || {});
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  // const cancelRef = React.useRef();

  React.useEffect(() => {
    if (isOpen) setEditData(product || {});
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAlertOpen(true);
  };

  const handleConfirmEdit = () => {
    setIsAlertOpen(false);
    onSave(editData);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" flexShrink={0}>
            Editar producto
          </DrawerHeader>

          <Box
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            height="calc(100vh - 80px)"
          >
            <DrawerBody flex="1" overflowY="auto" pb={4}>
              <FormControl mb={4}>
                <FormLabel>Título</FormLabel>
                <Input
                  name="title"
                  value={editData.title || ""}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Categoria</FormLabel>
                <Select
                  name="category"
                  value={editData.category || ""}
                  onChange={handleChange}
                >
                  {categorias.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Imagen URL</FormLabel>
                <Input
                  name="image"
                  value={editData.image || ""}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Precio</FormLabel>
                <Input
                  name="price"
                  type="number"
                  step="0.01"
                  value={editData.price || ""}
                  onChange={handleChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  name="description"
                  value={editData.description || ""}
                  onChange={handleChange}
                  required
                  minH="80px"
                  maxH="150px"
                  resize="vertical"
                />
              </FormControl>
            </DrawerBody>

            <DrawerFooter
              borderTopWidth="1px"
              flexShrink={0}
              bg="white"
              position="sticky"
              bottom={0}
              zIndex={1}
            >
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isSubmitting}
                loadingText="Guardando..."
              >
                Guardar
              </Button>
              <Button onClick={onClose} variant="outline">
                Cancelar
              </Button>
            </DrawerFooter>
          </Box>
        </DrawerContent>
      </Drawer>
      <ConfirmDialog
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
        onConfirm={handleConfirmEdit}
        title="Confirmar edición"
        message="¿Estás seguro de que quieres guardar los cambios en este producto?"
        confirmText="Sí, guardar"
        cancelText="Cancelar"
        isLoading={isSubmitting}
        confirmColor="blue"
      />
    </>
  );
};

export default ProductEditDrawer;
