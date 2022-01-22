import * as React from 'react'

import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}
