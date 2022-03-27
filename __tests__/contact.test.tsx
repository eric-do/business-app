import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'
import Contact from '../pages/contact'

describe('Form', () => {
  it('renders input fields', async () => {
    render(
    <ChakraProvider>
      <Contact />
    </ChakraProvider>
    );

    const name = 'Test user';
    const email = 'user@mail.com';
    const description = 'This is a test description';

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const desciptionInput = screen.getByLabelText('Description');

    expect(nameInput).toBeInTheDocument();
    userEvent.type(nameInput, name);
    await waitFor(() => expect(nameInput).toHaveValue(name));

    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, email);
    await waitFor(() => expect(emailInput).toHaveValue(email));

    expect(desciptionInput).toBeInTheDocument();
    userEvent.type(desciptionInput, description);
    await waitFor(() => expect(desciptionInput).toHaveValue(description));
  })
})