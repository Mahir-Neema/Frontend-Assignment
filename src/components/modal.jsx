import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

function FullScreenForm({ Child, isOpen, onClose }) {
  return (
    <>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Full Screen Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={"5"} bg="gray.50" borderRadius={"10px"}>
              {Child}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FullScreenForm;
