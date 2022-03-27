import {
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';

const DesktopConsultation = () => {
  return (
    <HStack
      display={{
        base: 'none',
        md: 'flex'
      }}
      justifyContent='center'
      py={12}
      spacing={-1}
    >
      <Input
        py={5}
        bg={'white'}
        borderWidth={3}
        borderColor='black'
        variant={'with-shadow'}
        w='auto'
      />
      <Button
        w='auto'
        variant={'with-shadow'}
      >
        Request consultation
      </Button>
    </HStack>
  );
};

export default DesktopConsultation;
