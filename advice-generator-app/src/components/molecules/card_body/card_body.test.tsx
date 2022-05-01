import { render, screen } from "@testing-library/react"
import CardBody from "."

describe('CardBody Component', () => {
  it('Should render the cardbody', () => {
    render(<CardBody title="My title"/>)

    expect(screen.getByText(/My title/)).toBeInTheDocument()
  })
})