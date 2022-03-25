import { render, screen } from '@testing-library/react'
import Navbar, { pages, brand, contact } from '@/components/navbar'

describe('Navbar', () => {
  it('renders site brand', () => {
    render(<Navbar />)

    const brandLogo = screen.getByRole('heading', {
      name: brand,
    })

    expect(brandLogo).toBeInTheDocument()
  });

  it('renders site sections', () => {
    render(<Navbar />)
    pages.forEach(p => {
      const link = screen.getByRole('link', {
        name: p.title,
      })

      expect(link).toBeInTheDocument()
    })
  })

  it('renders site Contact button', () => {
    render(<Navbar />)

    const contactButton = screen.getByRole('button', {
      name: contact,
    })

    expect(contactButton).toBeInTheDocument()
  });
})