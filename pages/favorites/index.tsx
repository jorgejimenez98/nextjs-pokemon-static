import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { localFavorites } from '../../utils'
import { NoFavorites } from '../../components/ui'
import { Card, Container, Grid, Text } from '@nextui-org/react'

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavoritesList())  
  }, [])

  return <>
      {favoritePokemons.length === 0 ? <NoFavorites /> : <>
        <Grid.Container gap={2} direction='row' justify='flex-start'>
          {favoritePokemons.map(id => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  width={'100%'}
                  height={140}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </>}
  </>
}


export default FavoritesPage