import React from 'react'
import { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PokeAPI } from '../../api'
import { Pokemon } from '../../interfaces'

interface PokemonDetailsProps { pokemon: Pokemon }

const PokemonDetailsPage: NextPage<PokemonDetailsProps> = ({ pokemon }) => {

  return (
    <div>{pokemon.name}</div>
  )
}

// Static Side 
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonIds = Array.from({ length: 151 }, (_, idx) => `${idx + 1}`)

  return { // Crea las 151 pages y pasa los paths a las static props
    paths: pokemonIds.map(id => ({
      params: { id }
    })),
    fallback: false
    // "blocking" Permite todas las pages y manda la prop como null
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data: pokemon } = await PokeAPI.get<Pokemon>(`/pokemon/${id}`)
  return { props: { pokemon } }
}

export default PokemonDetailsPage