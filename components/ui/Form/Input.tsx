import React from 'react';
import {
  useField,
  Field
} from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

interface CustomInputProps {
  type: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
}

const FormikChakraInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = 'text',
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        onBlur={field.onBlur}
        onChange={field.onChange}
        variant='with-shadow'
        {...props}
      />
      {touched && error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )

};

export default FormikChakraInput;
