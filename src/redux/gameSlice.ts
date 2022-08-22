import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createDefaultPlayers } from "../helpers/players";
import { RootState } from "./store";

const DEFAULT_NUM_OF_PLAYERS = 4;

export interface Player {
  name: string;
}

export interface GameStore {
  maxPoints: number;
  players: Player[];
}

const initialState = (): GameStore => {
  const players = createDefaultPlayers(DEFAULT_NUM_OF_PLAYERS);
  return { maxPoints: 10000, players };
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  // The `reducers` field lets us define reducers which are how we edit state in Redux
  reducers: {
    setMaxPoints: (
      state: GameStore,
      { payload: maxPoints }: PayloadAction<number>,
    ) => {
      state.maxPoints = maxPoints;
    },
    setNumberOfPlayers: (
      state: GameStore,
      { payload: numberOfPlayers }: PayloadAction<number>,
    ) => {
      state.players = createDefaultPlayers(numberOfPlayers);
    },
  },
});

// Making selectors below here
// A selector grabs "selects" a piece of state
export const selectNumOfPlayers = (state: RootState) =>
  state.game.players.length;

export const selectMaxPoints = (state: RootState) => state.game.maxPoints;

export default gameSlice;
