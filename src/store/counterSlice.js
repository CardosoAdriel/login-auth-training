import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit nos permite "alterar" o estado diretamente nos reducers.
            // Porém, não estamos alterando diretamente o estado (imutabilidade),
            // na verdade, ele usa uma lib chamada Immer, que usa um rascunho do estado
            // e o altera baseado nessas alterações no rascunho (draft).
            state.value += 1
        },
        decrement: (state) => {
            // mas a sensação é de alterar o estado diretamente, mais simples
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            // mas perceba que não usamos `return` aqui
            // no Toolkit nós alteramos o estado diretamente OU retornamos
            // não é possível fazer ambos no mesmo reducer
            state.value += action.payload

        }
    }
})

// Action creators são gerados para cada reducer no slice. 
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer