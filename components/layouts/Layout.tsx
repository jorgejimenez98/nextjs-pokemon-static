import { FC, ReactNode } from 'react'
import Head from 'next/head'

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

        <main>
            {children}
        </main>
    </>
  )
}

export default Layout