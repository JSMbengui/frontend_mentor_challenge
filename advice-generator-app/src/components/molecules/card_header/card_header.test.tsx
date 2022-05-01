import { render, screen } from "@testing-library/react"

import CardHeader from "."

describe('CardHeader Component', () => {
  it('Should render the cardheader', () => {
    render(
      <CardHeader
        adviceId="card_id_1"
      />
    )

    expect(screen.getByText(/ADVICE # card_id_1/)).toBeInTheDocument()
  })
})