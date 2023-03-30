import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import pokemonService from "./pokemonService"

const initialState = {
    pokeList: [],
    singlePokemon: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getPokemons = createAsyncThunk(
    'pokemon/getPokemons',
    async (_, thunkAPI) => {
        try {
            return await pokemonService.getPokemons()
        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getSinglePokemon = createAsyncThunk(
    'pokemon/getSinglePokemon',
    async (id, thunkAPI) => {
        try {
            return await pokemonService.getSinglePokemon(id)
        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.pokeList = action.payload
            })
            .addCase(getPokemons.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.pokeList = null
            })

            .addCase(getSinglePokemon.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSinglePokemon.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.singlePokemon = action.payload
            })
            .addCase(getSinglePokemon.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.pokeList = null
            })
    }
})

export const { reset } = pokemonSlice.actions
export default pokemonSlice.reducer