import { createSlice, isAction, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const produto1 = action.payload

      if (state.itens.find((p) => p.id === produto1.id)) {
        const favoritosSemProduto = state.itens.filter((p) => p.id !== produto1.id)
        state.itens.push(favoritosSemProduto)
      } else {
        state.itens.push(produto1)
      }
    }
  }
})

export const { adicionarFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
