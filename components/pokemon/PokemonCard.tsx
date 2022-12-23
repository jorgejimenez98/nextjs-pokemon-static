import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'
import { SmallPokemon } from '../../interfaces'

interface PokemonCardProps { pokemon: SmallPokemon }

const PokemonCard: React.FC<PokemonCardProps> = ({ 
    pokemon: { id, name, img } 
}) => {
    const router = useRouter()
    const handleClick = () => router.push(`/pokemon/${id}`)

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card hoverable clickable onClick={handleClick}>
            <Card.Body css={{ p: 1 }}>
                <Card.Image src={img} width={'100%'} height={140}/>
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>{id}</Text>
                </Row>
            </Card.Footer>
            </Card>
        </Grid>
    )
}
export default PokemonCard