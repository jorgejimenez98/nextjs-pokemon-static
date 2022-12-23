import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'}
                alt='icon-app'
                width={70}
                height={70}
            />

            <Link href={'/'}>
                <Text color='white' h2>P</Text>
                <Text color='white'>okémon</Text>
            </Link>

            <Spacer css={{ flex: '1' }}/>
            <Text color='white'>Favoritos</Text>
        </div>
    )
}

export default Navbar