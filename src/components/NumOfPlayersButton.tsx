import React, { useCallback } from "react";
import gameSlice, { selectNumOfPlayers } from "../redux/gameSlice";
import { useTypedDispatch, useTypedSelector } from "../redux/store";
import styles from "./NumOfPlayersButton.module.scss";

const NumOfPlayersButton: React.FC<{ value: number }> = ({ value }) => {
  const dispatch = useTypedDispatch();

  const handleClick = useCallback(() => {
    dispatch(gameSlice.actions.setNumberOfPlayers(value));
  }, [dispatch, value]);

  return (
    <button
      className={
        value === useTypedSelector(selectNumOfPlayers)
          ? styles.selected
          : styles.notSelected
      }
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default NumOfPlayersButton;
