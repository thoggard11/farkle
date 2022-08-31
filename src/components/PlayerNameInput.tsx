import React, { useCallback } from "react";
import gameSlice from "../redux/gameSlice";
import { useTypedDispatch } from "../redux/store";

type Props = {
  index: number;
  playerName: string;
};

const PlayerNameInput: React.FC<Props> = ({ index, playerName }) => {
  const dispatch = useTypedDispatch();
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        gameSlice.actions.setPlayerName({ index, name: e.target.value }),
      );
    },
    [dispatch, index],
  );

  return (
    <input
      type="string"
      placeholder="Player 1"
      value={playerName}
      onChange={handleOnChange}
    />
  );
};

export default PlayerNameInput;
