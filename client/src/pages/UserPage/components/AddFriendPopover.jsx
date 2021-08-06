import React from 'react';
import {
  Popover,
  Button,
  PopoverTrigger,
  Portal,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverContent,
  useDisclosure,
} from '@chakra-ui/react';

const AddFriendPopover = (props) => {
  const { userObj, addConspirator, userName } = props;
  const { onClose } = useDisclosure();
  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          Add
          {' '}
          {userName}
          {' '}
          as Co-Conspirator
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            Really add
            {' '}
            {userName}
            {' '}
            as Co-Conspirator?
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button
              colorScheme="blue"
              onClick={() => {
                if (userObj.username) {
                  return addConspirator(userName);
                }
                onClose();
              }}
            >
              Add as Co-Conspirator

            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default AddFriendPopover;
