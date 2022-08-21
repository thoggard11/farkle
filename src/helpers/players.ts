import { Player } from "../redux/gameSlice";
import { createArrayWithValueOfLength } from "./array";

/**
 * Creates single player object with a name of 'Player #'
 */
export const createPlayer = (index: number): Player => {
  return { name: `Player ${index}` };
};

/**
 * Makes new array of type Player based on number of players
 */
export const createDefaultPlayers = (numOfPlayers: number): Player[] => {
  return createArrayWithValueOfLength(numOfPlayers).map((_el, index) => {
    return createPlayer(index + 1);
  });
};
