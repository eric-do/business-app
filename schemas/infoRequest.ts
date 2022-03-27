import * as yup from 'yup';

const personSchema = yup.object({
  name: yup.string().defined(),
  email: yup.string().email().defined(),
});

export default personSchema;