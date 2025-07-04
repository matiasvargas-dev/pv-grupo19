import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "¿Estás seguro?",
  message = "Esta acción no se puede deshacer.",
  confirmText = "Sí, continuar",
  cancelText = "Cancelar",
  isLoading = false,
  confirmColor = "red",
}) => {
  const cancelRef = useRef();
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {title}
        </AlertDialogHeader>
        <AlertDialogBody>{message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            colorScheme={confirmColor}
            onClick={onConfirm}
            ml={3}
            isLoading={isLoading}
          >
            {confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
