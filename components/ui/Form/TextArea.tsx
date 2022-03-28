import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';

interface CustomInputProps {
  type: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
}

const FormikChakraTextArea: React.FC<CustomInputProps> = ({
  label,
  id,
  type = 'text',
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Textarea
        id={id}
        onBlur={field.onBlur}
        variant='with-shadow'
        {...props}
      />
      {touched && error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormikChakraTextArea;
