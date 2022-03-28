import {
  Input,
  Button,
  HStack,
  Center
} from '@chakra-ui/react';

const DesktopConsultation = () => {
  return (
      <HStack
        display={{
          base: 'none',
          md: 'flex'
        }}
        w='700px'
        height={100}
        spacing={-1}
      >
        <Input
          bg={'white'}
          borderWidth={3}
          borderColor='black'
          variant={'with-shadow'}
          height='60px'
          w='60%'
        />
        <Button
          w='auto'
          height='60px'
          variant={'with-shadow'}
        >
          Request consultation
        </Button>
      </HStack>

  );
};

export default DesktopConsultation;