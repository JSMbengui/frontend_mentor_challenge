import { render, screen } from "@testing-library/react"
import Paragrath from "."

describe('Paragraph Component', () => {
  it('Should render the paragraph', () => {
    render(<Paragrath>My Test</Paragrath>)

    expect(screen.getByText('My Test')).toBeInTheDocument()
  })
})