import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { PokeAPI } from "../../../api"
import { Pokemon, PokemonListResponse } from "../../../interfaces"

interface PokemonDetailsNamePageProps {
    pokemon: Pokemon
}

const PokemonDetailsNamePage: NextPage<PokemonDetailsNamePageProps> = ({ pokemon }) => {

    return <>
        {pokemon.name}
    </>
}


// Static Side Generating SSG
export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await PokeAPI.get<PokemonListResponse>(`/pokemon?limit=151`)
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

    return {
      paths: pokemonNames.map(name => ({
        params: { name }
      })),
      fallback: false
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string }
  
    const { data: pokemon } = await PokeAPI.get<Pokemon>(`/pokemon/${name}`)
    return { props: { pokemon } }
  }

export default PokemonDetailsNamePage