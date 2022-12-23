
const getFavoritesList = (): number[] => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites')  || '[]')
    return favorites
}

const toogleFavorite = (id: number) => {
    let favorites: number[] = getFavoritesList()
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokId => pokId !== id)
    } else { favorites.push(id) }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsPokemon = (id: number): boolean => {
    if (typeof window === 'undefined') return false
    const favorites: number[] = getFavoritesList()
    return favorites.includes(id)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toogleFavorite,
    existsPokemon,
    getFavoritesList
}