import { render, screen } from '@testing-library/react'
import About from '../pages/about';

describe('About', () => {
  it('renders section title', () => {
    render(<About />)

    const title = screen.getByRole('heading', {
      name: 'A passion for technical growth',
    })

    expect(title).toBeInTheDocument()
  });
})