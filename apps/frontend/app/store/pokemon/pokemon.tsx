import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store"; // Assuming you have AppThunk defined in your store file

// Define the Pokemon interface
export interface Pokemon {
  name: string;
  typeof: string;
  base_experience: number;
}

// Define the initial state
const initialState: Pokemon = {
  name: "",
  typeof: "",
  base_experience: 0,
};

// Create the Pokemon slice
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      return action.payload;
    },
  },
});

// Export the reducer
export const pokemonReducer = pokemonSlice.reducer;

// Define an asynchronous action to fetch Pokemon data from the API
export const fetchData = (): AppThunk => async (dispatch) => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if (response.ok) {
      const pokemonData: Pokemon = await response.json();
      dispatch(setPokemon(pokemonData));
    } else {
      throw new Error("Failed to fetch Pokemon data");
    }
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

// Extract action creators
export const { setPokemon } = pokemonSlice.actions;
