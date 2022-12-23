import React from 'react'
import { Grid, Card } from '@nextui-org/react'
import FavoritePokemonCard from './FavoritePokemonCard'

const FavoritePokemons: React.FC<{ pokemons: number[] }> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
        {pokemons.map(id => <FavoritePokemonCard id={id} key={id} />)}
    </Grid.Container>
  )
}

export default FavoritePokemons