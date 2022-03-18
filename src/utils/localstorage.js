export const createMypokemon = () => {
    if (!localStorage.getItem('_cap_mypokemon')) {
        localStorage.setItem('_cap_mypokemon', JSON.stringify([]))
    }
}