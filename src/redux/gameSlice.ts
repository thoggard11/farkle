import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const DEFAULT_NUM_OF_PLAYERS = 4;

export interface Player {
  name: string;
}

const createPlayer = (index: number) => {
  return { name: `Player ${index + 1}` };
};

export interface GameSlice {
  players: Player[];
}

const initialState = (): GameSlice => {
  const players = Array(DEFAULT_NUM_OF_PLAYERS)
    .fill(null)
    .map((_el, index) => {
      return createPlayer(index);
    });

  return { players };
};

export const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    setNumberOfPlayers: (
      state: GameSlice,
      { payload: numberOfPlayers }: PayloadAction<number>,
    ) => {
      state.players = Array(numberOfPlayers)
        .fill(null)
        .map((_el, index) => {
          return createPlayer(index);
        });
    },
  },
});

// Making selectors below here
export const selectNumOfPlayers = (state: RootState) =>
  state.game.players.length;

export default gameSlice;
