import {
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';

const MobileConsultation = () => {
  return (
    <VStack
      w='100%'
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
          layerStyle='with-shadow'
          placeholder='Email address'
        />
        <Button
          layerStyle='with-shadow'
        >
          Request consultation
        </Button>
      </VStack>
    </VStack>
  );
};

export default MobileConsultation;
