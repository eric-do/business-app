import { render, screen } from '@testing-library/react'
import Navbar, { pages } from '@/components/navbar'

describe('Navbar', () => {
  it('renders site sections', () => {
    render(<Navbar />)
    pages.forEach(p => {
      const link = screen.getByRole('link', {
        name: p.title,
      })

      expect(link).toBeInTheDocument()
    })
  })
})