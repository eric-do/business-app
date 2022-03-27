import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import Contact from '../pages/contact'

describe('Form', () => {
  it('renders a heading', () => {
    render(
    <ChakraProvider>
      <Contact />
    </ChakraProvider>
    )

    const form = screen.getByLabelText('First name');

    expect(form).toBeInTheDocument()
  })
})