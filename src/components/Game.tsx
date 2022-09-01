import React, { useMemo, useRef } from "react";
import Dice from "react-dice-roll";
import { createArrayWithValueOfLength } from "../helpers/array";

const FACES = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const ROLL_KEY = "Enter";
const rollDice = () => {
  window.dispatchEvent(new KeyboardEvent("keypress", { key: ROLL_KEY }));
};

const Game: React.FC = () => {
  const sixDice = useMemo(() => {
    return createArrayWithValueOfLength(6).map((_el, index) => {
      const shouldRoll = true;
      return (
        <Dice
          key={index}
          triggers={shouldRoll ? [ROLL_KEY] : []}
          rollingTime={(index + 1) * 250}
          faces={FACES}
          size={75}
          disabled={!shouldRoll}
          onRoll={(value) => console.log({ index, value })}
        />
      );
    });
  }, []);

  return (
    <div>
      <h1>GAME</h1>
      {sixDice}

      <button onClick={rollDice}>ROLL</button>
    </div>
  );
};

export default Game;
