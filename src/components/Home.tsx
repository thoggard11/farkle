import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gameSlice, { selectNumOfPlayers } from "../redux/gameSlice";
import { useTypedSelector, useTypedDispatch } from "../redux/store";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const numOfPlayers = useTypedSelector(selectNumOfPlayers);
  console.log(numOfPlayers);
  const navigateToHowTo = useCallback(() => {
    navigate("/howto");
  }, [navigate]);

  return (
    <div>
      <h1>Farkle!</h1>
      <button onClick={navigateToHowTo}>HOW TO PLAY</button>
      <div>
        <h2>Number of Players</h2>
        <PlayerButton value={1} />
        <PlayerButton value={2} />
        <PlayerButton value={3} />
        <PlayerButton value={4} />
        <PlayerButton value={5} />
        <PlayerButton value={6} />
        <PlayerButton value={7} />
        <PlayerButton value={8} />
      </div>
      <h2>
        Points needed to win: <input type="number" value={10000} />
      </h2>

      <button>CONTINUE</button>
    </div>
  );
};

const PlayerButton: React.FC<{ value: number }> = ({ value }) => {
  const dispatch = useTypedDispatch();

  const handleClick = useCallback(() => {
    dispatch(gameSlice.actions.setNumberOfPlayers(value));
  }, [dispatch, value]);

  return <button onClick={handleClick}>{value}</button>;
};

export default Home;
