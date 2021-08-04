import React, {useContext, useState} from 'react';
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
import { UserContext } from '../../../contexts/UserContext';
import Message from './Message';


const Chat = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const socket = useContext(SocketContext);
    const {userObj} = useContext(UserContext);
    const connectUser = () => {
      const userId = userObj.username;  // Retrieve userId
      if (!userId) return;
      socket.emit('userConnected', userId);
    };
  const disconnectUser = () =>{  // Called whenever a user signs out
    const userId = userObj.username;  // Retrieve userId
    if (!userId) return;
    socket.emit('userDisconnected', userId);
  };

return (
      <>
        <Button onClick={() => {
          connectUser();
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
              <Button onClick={() => {

                disconnectUser();
                onClose();}}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
export default Chat;
