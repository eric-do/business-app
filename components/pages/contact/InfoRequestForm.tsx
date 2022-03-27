import {
  FormControl,
  Button,
  FormLabel,
  Box,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';
import { useFormik, Formik, Form, Field, FormikHelpers } from 'formik';
import { infoRequest } from '@/schemas';
import { Input, TextArea } from '@/components/ui/Form';

interface Values {
  name: string;
}

const InfoRequestForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={infoRequest}
      onSubmit={() => {
        console.log('submitted');
      }}
    >
      {({ errors, touched }) => {
        // console.log({errors, touched})
        return (
          <Form>
            <Box
              display='flex'
              alignItems='center'
              flexDirection={'column'}
              w='100%'
            >
              <VStack
                w={{
                  base: '100%',
                  md: '60%',
                }}
                spacing={12}
                justifyContent='center'
              >
                <VStack
                  spacing={4}
                  w='100%'
                >
                  <Input
                    id='name'
                    type='text'
                    name='name'
                    label='First name'
                  />
                  <Input
                    id='email'
                    type='email'
                    name='email'
                    label='Email'
                  />
                  <TextArea
                    id='query'
                    type='text'
                    name='query'
                    label='Description'
                  />
                </VStack>
                <Button
                  variant='with-shadow'
                  type='submit'
                  bgColor={
                    Object.keys(errors).length === 0 &&
                    Object.keys(touched).length > 0
                      ? 'green.100'
                      : 'white'
                  }
                >
                  Submit
                </Button>
              </VStack>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InfoRequestForm;
