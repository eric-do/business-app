import React, { InputHTMLAttributes } from 'react';
import { FieldProps, useField, FieldHookConfig, FormikProps, FormikValues } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react'

interface CustomInputProps {
  type: string;
  label?: string;
  id: string;
  name: string;
}

const FormikChakraInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = 'text',
  ...props
}) => {
  const [field, {error, touched}] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id}>First name</FormLabel>
      <Input
        id={id}
        type={type}
        onBlur={field.onBlur}
        variant='with-shadow'
      />
      { touched && error && (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormikChakraInput;