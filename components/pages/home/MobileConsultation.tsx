import {
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';

const MobileConsultation = () => {
  return (
    <VStack
      display={{ md: 'none' }}
      py={7}
    >
      <VStack
        spacing={-1}
        w='100%'
      >
        <Input
          py={5}
          bg={'white'}
          borderWidth={3}
          borderColor='black'
          variant={'with-shadow'}
        />
        <Button
          variant={'with-shadow'}
        >
          Request consultation
        </Button>
      </VStack>
    </VStack>
  );
};

export default MobileConsultation;
