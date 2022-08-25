import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { createArrayWithValueOfLength } from "../helpers/array";
import gameSlice, {
  selectNumOfPlayers,
  selectMaxPoints,
} from "../redux/gameSlice";
import { useTypedSelector, useTypedDispatch } from "../redux/store";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const numOfPlayers = useTypedSelector(selectNumOfPlayers);
  const maxPoints = useTypedSelector(selectMaxPoints);
  console.log(numOfPlayers);

  const navigateToHowTo = useCallback(() => {
    navigate("/howto");
  }, [navigate]);

  const dispatch = useTypedDispatch();
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(gameSlice.actions.setMaxPoints(e.target.valueAsNumber));
    },
    [dispatch],
  );

  const handleOnClick = useCallback(() => {
    dispatch(gameSlice.actions.setPage(1));
  }, [dispatch]);

  const buttons = useMemo(
    () =>
      createArrayWithValueOfLength(8).map((_el, index) => {
        return <PlayerButton key={index} value={index + 1} />;
      }),
    [],
  );

  return (
    <div>
      <h1>Farkle!</h1>
      <button onClick={navigateToHowTo}>HOW TO PLAY</button>
      <div>
        <h2>Number of Players</h2>
        {buttons}
      </div>
      <h2>
        Points needed to win:{" "}
        <input
          type="number"
          placeholder="10000"
          value={maxPoints}
          onChange={handleOnChange}
        />
      </h2>

      <button onClick={handleOnClick}>CONTINUE</button>
    </div>
  );
};

const PlayerButton: React.FC<{ value: number }> = ({ value }) => {
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

export default Home;
