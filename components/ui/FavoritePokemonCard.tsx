import React from 'react'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

const FavoritePokemonCard: React.FC<{ id: number }> = ({ id }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/pokemon/${id}`)
  }
  
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        <Card hoverable clickable css={{ padding: 10 }} onClick={handleClick}>
          <Card.Image
              width={'100%'}
              height={140}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
          />
        </Card>
    </Grid>
  )
}

export default FavoritePokemonCard