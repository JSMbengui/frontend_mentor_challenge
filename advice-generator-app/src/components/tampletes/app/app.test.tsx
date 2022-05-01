import { render } from "@testing-library/react"
import App from "."

describe('App Component', () => {
  it('Should render the app component', () => {
    render(<App advice={{ id: "1", title: 'Any advice' }} />)


  })
  it('Should request another advice', () => {
    render(<App advice={{ id: "1", title: 'Any advice' }} />)
    
  })

})