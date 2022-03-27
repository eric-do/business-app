import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { infoRequest } from '@/schemas';

const InfoRequestForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: infoRequest,
    onSubmit: () => {
      console.log('Submitted form');
    },
  });

  return (
    <FormControl isInvalid={!!formik.errors.name}>
      <FormLabel htmlFor='name'>First name</FormLabel>
      <Input
        id='name'
        type='text'
        {...formik.getFieldProps('name')}
        variant='with-shadow'
      />
      {formik.touched.name && formik.errors.name && (
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InfoRequestForm;
