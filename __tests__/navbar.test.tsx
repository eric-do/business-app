import { render, screen } from '@testing-library/react'
import Navbar, { brand, contact } from '@/components/common/Navbar/Navbar'

const NAV_ITEMS = [
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Careers',
    url: '/careers',
  },
  {
    title: 'About',
    url: '/about',
  },
];

describe('Navbar', () => {
  it('renders site brand', () => {
    render(<Navbar />)

    const brandLogo = screen.getByRole('link', {
      name: brand,
    })

    expect(brandLogo).toBeInTheDocument()
  });

  it('renders site sections', () => {
    render(<Navbar />)
    NAV_ITEMS.forEach(p => {
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