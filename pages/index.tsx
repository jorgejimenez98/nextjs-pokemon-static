import { NextPage } from 'next'
import { PokeAPI } from '../api'
import { GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface HomeProps { pokemons: SmallPokemon[] }

const Home: NextPage<HomeProps> = ({ pokemons }) => {

  return <Grid.Container gap={2} justify='flex-start'>
    {pokemons.map((pokemon) => <PokemonCard 
      pokemon={pokemon} key={pokemon.id}
    />)}
  </Grid.Container>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PokeAPI.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((pokemon, idx) => ({
    ...pokemon, 
    id: idx + 1, 
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idx + 1}.png`
  }))

  return { props: { pokemons } }
}

export default Home