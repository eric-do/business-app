import { render, screen } from '@testing-library/react'
import About from '../pages/about';

describe('About', () => {
  it('renders page title', () => {
    render(<About />)

    const title = screen.getByRole('heading', {
      name: 'About Us',
    })

    expect(title).toBeInTheDocument()
  });

  it('renders employee images', () => {
    render(<About />);
    const founderImage = screen.getByAltText('Picture of the founder')
    expect(founderImage).toBeInTheDocument();
  })
})