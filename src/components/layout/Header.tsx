import Container from 'components/common/Container'
import React, { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 bg-ocean">
      <Container>
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-3">
          <img src="/logo-kita.png" className="mx-auto h-8 w-auto" />
        </nav>
      </Container>
    </header>
  )
}

export default Header
