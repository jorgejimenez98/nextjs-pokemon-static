import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { localFavorites } from '../../utils'
import { FavoritePokemons, NoFavorites } from '../../components/ui'
import { Card, Container, Grid, Text } from '@nextui-org/react'

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavoritesList())  
  }, [])

  const isEmpty = favoritePokemons.length === 0
  const Component = isEmpty ? <NoFavorites /> : <FavoritePokemons pokemons={favoritePokemons}/>

  return <>{Component}</>
}


export default FavoritesPage