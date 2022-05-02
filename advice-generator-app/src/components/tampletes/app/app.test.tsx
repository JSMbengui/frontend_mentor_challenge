import { theme } from "@assets/theme"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from "styled-components"

import App from "."

import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('App Component', () => {
  it('Should render the app component', () => {
    render(
      <ThemeProvider theme={theme}>
        <App advice={{ id: "1", title: 'Any advice' }} />
      </ThemeProvider>
    )

    expect(screen.getByText(`"Any advice"`)).toBeInTheDocument()
    expect(screen.getByText(/ADVICE # 1/)).toBeInTheDocument()
  })
  it('Should render new advice when request another advice successed', async () => {
    render(
      <ThemeProvider theme={theme}>
        <App advice={{ id: "1", title: 'Any advice' }} />
      </ThemeProvider>
    )

    mockedAxios.get.mockResolvedValue({
      data: {
        id: "1",
        title: "New advice"
      }
    })

    await userEvent.click(screen.getByTestId('next_advice'))

    expect(await screen.findByText(/ADVICE # 1/)).toBeInTheDocument()
    expect(await screen.findByText(/New advice/)).toBeInTheDocument()

  })
  it('Should maitain the current advice whem request new another advice fails', async () => {
    render(
      <ThemeProvider theme={theme}>
        <App advice={{ id: "1", title: 'Any advice' }} />
      </ThemeProvider>
    )
    
    mockedAxios.get.mockRejectedValue(new Error())

    await userEvent.click(screen.getByTestId('next_advice'))

    expect(await screen.findByText(/ADVICE # 1/)).toBeInTheDocument()
    expect(await screen.findByText(/Any advice/)).toBeInTheDocument()

  })

})