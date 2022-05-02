import { render, screen } from "@testing-library/react"

import Divider from "."

describe('Divider Component', () => {
  it('Should render the divider', () => {
    render(
      <Divider />
    )

    // screen.debug()
  })
})