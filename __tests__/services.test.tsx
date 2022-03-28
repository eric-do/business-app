import { render, screen } from '@testing-library/react'
import Services from '../pages/services'

describe('Navbar', () => {
  it('renders section title', () => {
    render(<Services />)

  })
});