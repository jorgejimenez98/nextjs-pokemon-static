import React, { useState } from 'react'
import { NextPage } from 'next'
import { PokeAPI } from '../../api'
import { Pokemon } from '../../interfaces'
import { localFavorites } from '../../utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Button, Card, Grid, Text, Image, Container } from '@nextui-org/react'
import confetti from 'canvas-confetti'

interface PokemonDetailsProps { pokemon: Pokemon }
const PokemonDetailsPage: NextPage<PokemonDetailsProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existsPokemon(pokemon.id))

  const onToglleFavorite = () => { 
    localFavorites.toogleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
    if (isInFavorites) return
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }

  return <Grid.Container css={{ marginTop: '5px'}} gap={2}>
    <Grid xs={12} sm={4}>
      <Card hoverable css={{ padding: '30px' }}>
        <Card.Body>
          <Card.Image 
            src={pokemon.sprites.other?.dream_world.front_default || 'no-image' }
            alt={pokemon.name}
            width="100%"
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>

    <Grid xs={12} sm={8}>
      <Card>
        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text h1 transform='capitalize'>{pokemon.name}</Text>
          <Button
            color={'gradient'}
            ghost={!isInFavorites}
            onClick={onToglleFavorite}
          >
            {isInFavorites ? 'En favoritos' : 'Guardar en Favoritos'}
          </Button>
        </Card.Header>

        <Card.Body>
          <Text size={30}>Sprites:</Text>
          <Container direction='row' display='flex' >
            <Image 
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image 
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image 
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image 
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </Grid>
  </Grid.Container>
}

// Static Side Generating SSG
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonIds = Array.from({ length: 151 }, (_, idx) => `${idx + 1}`)

  return { // Crea las 151 pages y pasa los paths a las static props
    paths: pokemonIds.map(id => ({
      params: { id }
    })),
    fallback: 'blocking'
    // fallback: false
    // "blocking" Permite todas las pages y manda la prop como null
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  // Incremental Static Generation
  let pokemonAux = null
  try { // Si existe el ID lo muestra
    let { data: pokemon } = await PokeAPI.get<Pokemon>(`/pokemon/${id}`)
    pokemonAux = pokemon
  } catch (error) {
    pokemonAux = null
  }

  // Si no existe lo manda a la url /
  if (!pokemonAux) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return { 
    props: { pokemon: pokemonAux },
    // Incremental Static regeneration
    revalidate: 86400 // Se regenera la pagina cada 24 horas, son segundos
  }
}

export default PokemonDetailsPage