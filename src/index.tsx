import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'styles/style.css'
import App from 'pages/App'
import { RecoilRoot } from 'recoil'

render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
)
