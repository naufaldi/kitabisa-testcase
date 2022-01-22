import Container from 'components/common/Container'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="fixed top-0 bg-ocean inset-x-0">
      <Container>
        <nav className="flex justify-between items-center py-3 mx-auto max-w-screen-xl">
          <img src="/src/public/logo-kita.png" className="h-8 w-auto mx-auto" />
        </nav>
      </Container>
    </header>
  )
}

export default Header
