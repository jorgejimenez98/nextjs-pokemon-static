import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface LayoutProps { children: ReactNode }
const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <>
        <Head>
            <title>Pokemon APP</title>
            <meta name='author' content='Jorge JImenez' />
            <meta name='description' content='INfo about the pokemon'/>
            <meta name='keywords' content='XXXX, pokemon, pokedex' />
        </Head>

        {/* Navbar  */}
        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}

export default Layout