import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createDefaultPlayers } from "../helpers/players";
import { RootState } from "./store";

const DEFAULT_NUM_OF_PLAYERS = 4;

export enum Page {
  HOME = "HOME",
  SETUP = "SETUP",
  GAME = "GAME",
}

export interface Player {
  name: string;
}

export interface GameStore {
  page: Page;
  maxPoints: number;
  players: Player[];
}

const initialState = (): GameStore => {
  const players = createDefaultPlayers(DEFAULT_NUM_OF_PLAYERS);
  return { page: Page.HOME, maxPoints: 10000, players };
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  // The `reducers` field lets us define reducers which are how we edit state in Redux
  reducers: {
    setPage: (state: GameStore, { payload: page }: PayloadAction<Page>) => {
      state.page = page;
    },
    setMaxPoints: (
      state: GameStore,
      { payload: maxPoints }: PayloadAction<number>,
    ) => {
      state.maxPoints = maxPoints;
    },

    // --- These are all equivalent to each other --- //

    setNumberOfPlayers: (
      state: GameStore,
      { payload: numberOfPlayers }: PayloadAction<number>,
    ) => {
      state.players = createDefaultPlayers(numberOfPlayers);
    },
    setNumberOfPlayers2: (
      state: GameStore,
      { payload }: PayloadAction<number>,
    ) => {
      state.players = createDefaultPlayers(payload);
    },
    setNumberOfPlayers3: (state: GameStore, action: PayloadAction<number>) => {
      state.players = createDefaultPlayers(action.payload);
    },
    setNumberOfPlayers4: (state: GameStore, action: PayloadAction<number>) => {
      const numOfPlayers = action.payload;
      state.players = createDefaultPlayers(numOfPlayers);
    },
    setNumberOfPlayers5: (state: GameStore, action: PayloadAction<number>) => {
      const { payload } = action;
      state.players = createDefaultPlayers(payload);
    },
    setNumberOfPlayers6: (state: GameStore, action: PayloadAction<number>) => {
      const { payload: numOfPlayers } = action;
      state.players = createDefaultPlayers(numOfPlayers);
    },

    // ^^^ End examples ^^^ //

    setPlayerName: (
      state: GameStore,
      { payload: playerInfo }: PayloadAction<{ index: number; name: string }>,
    ) => {
      state.players[playerInfo.index].name = playerInfo.name;
    },
  },
});

// Making selectors below here
// A selector grabs "selects" a piece of state
export const selectNumOfPlayers = (state: RootState): number =>
  state.game.players.length;

export const selectMaxPoints = (state: RootState): number =>
  state.game.maxPoints;

export const selectPage = (state: RootState): Page => state.game.page;

export const selectPlayerName = (state: RootState, index: number): string =>
  state.game.players[index]?.name || "Player";

export const selectPlayers = (state: RootState): Player[] => state.game.players;

export default gameSlice;
