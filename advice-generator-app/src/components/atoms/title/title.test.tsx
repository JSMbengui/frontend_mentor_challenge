import { render, screen } from "@testing-library/react"
import Title from "."

describe('Title Component', () => {
  it('Should render', () =>  {
    render(<Title>My title</Title>)

    expect(screen.getByText('My title')).toBeInTheDocument()
  })
})