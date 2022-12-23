import { NextPage } from 'next'
import { PokeAPI } from '../api'
import { GetStaticProps } from 'next'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface HomeProps { pokemons: SmallPokemon[] }

const Home: NextPage<HomeProps> = ({ pokemons }) => {

  return (
    <>
      <ul>
        {pokemons.map(({ id, name}) => (
          <li key={id}>
            #{id} - {name}
          </li>
        ))}
      </ul>
    </>
  )
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