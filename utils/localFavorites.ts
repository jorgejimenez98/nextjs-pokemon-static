
export const toogleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites')  || '[]')
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokId => pokId !== id)
    } else { favorites.push(id) }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}