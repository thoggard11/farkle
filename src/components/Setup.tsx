import React, { useCallback, useMemo } from "react";
import gameSlice, { selectPlayers, Page } from "../redux/gameSlice";
import { useTypedDispatch, useTypedSelector } from "../redux/store";
import PlayerNameInput from "./PlayerNameInput";

const Setup: React.FC = () => {
  const players = useTypedSelector(selectPlayers);

  const playerEntries = useMemo(
    () =>
      players.map((player, index) => {
        return (
          <PlayerNameInput key={index} index={index} playerName={player.name} />
        );
      }),
    [players],
  );

  const dispatch = useTypedDispatch();
  const handleOnClick = useCallback(() => {
    dispatch(gameSlice.actions.setPage(Page.GAME));
  }, [dispatch]);

  return (
    <div>
      <h1>Player Setup</h1>
      {playerEntries}
      <button onClick={handleOnClick}>CONTINUE</button>
    </div>
  );
};

export default Setup;
