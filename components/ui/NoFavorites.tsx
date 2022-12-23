import React from 'react'
import { Container, Text } from '@nextui-org/react'

const NoFavorites: React.FC = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>
      <Text h1>No hay favoritos</Text>
    </Container>
  )
}

export default NoFavorites