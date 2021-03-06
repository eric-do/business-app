import {
  Heading,
  Text,
  VStack,
  Button
} from '@chakra-ui/react';
import { Link } from '@/components/ui';

interface Props {
  title: string;
  description: string;
}

const SellingPoint = ({ title, description }: Props) => {
  return (
    <VStack
      key={title}
      spacing={3}
      alignItems='flex-start'
      w={{
        base: '100%',
        md: '60%'
      }}
    >
      <Heading
        bgGradient='linear(to-br,#fcc02b, #ff7979 40%, #a33abd 89%)'
        bgClip='text'
        as='h3'
        fontSize={{
          base: 'xl',
          md: '3xl'
        }}
      >
        {title}
      </Heading>
      <Text
        fontSize={{
          base: 'lg',
          md: '2xl'
        }}
      >
        {description}
      </Text>
      <Link
        src='/education'
      >
        <Button
          layerStyle='with-shadow'
          p={7}
          width='auto'
        >
          Learn more
        </Button>
      </Link>
    </VStack>
  )
};

export default SellingPoint;
