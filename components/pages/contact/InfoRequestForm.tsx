import {
  FormControl,
  // Input,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik, Formik, Form, Field, FormikHelpers} from 'formik';
import { infoRequest } from '@/schemas';
import { Input } from '@/components/ui/Form';

interface Values {
  name: string;
}

const InfoRequestForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={infoRequest}
      onSubmit={() => {console.log('submitted')}}
    >
      <Form>
        <Input
          id='name'
          type='text'
          name='name'
        />
      </Form>
    </Formik>
  );
};

export default InfoRequestForm;
