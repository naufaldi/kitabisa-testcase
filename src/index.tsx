import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'styles/style.css'
import App from 'components/App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
