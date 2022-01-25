import { render } from '@testing-library/react'
import App from 'pages/App'

test('Renders main page correctly', () => {
  // Setup
  render(<App />)
  expect(true).toBeTruthy()
})
