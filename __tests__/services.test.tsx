import { render, screen } from '@testing-library/react'
import Services from '../pages/services'

describe('Navbar', () => {
  it('renders section title', () => {
    render(<Services />)

    const sectionTitle = screen.getByRole('heading', {
      name: 'Services',
    })

    expect(sectionTitle).toBeInTheDocument();
  })

  it('renders services', () => {
    render(<Services />)

    const educationTitle = screen.getByRole('heading', {
      name: 'Education',
    })

    const webdevTitle = screen.getByRole('heading', {
      name: 'Web development',
    })

    expect(educationTitle).toBeInTheDocument();
    expect(webdevTitle).toBeInTheDocument();
  })
});