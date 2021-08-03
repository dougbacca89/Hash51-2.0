import React, {useContext} from 'react';
import {
    useDisclosure,
    Modal,
    ModalOverlay,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    FormLabel,
    Input,
    chakra,
    ModalCloseButton,
    FormControl,
} from '@chakra-ui/react';
import { SocketContext } from '../../../contexts/SocketContext';
import Message from './Message';

const Chat = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const socket = useContext(SocketContext);

    return (
      <>
        <Button onClick={() => {
            console.log(socket.connect());
            onOpen();}}>Open Modal</Button>
        <Button ml={4}>
          I'll receive focus on close
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <chakra.div />
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Input placeholder="Message" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
export default Chat;
