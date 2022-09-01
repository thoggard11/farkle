import React from "react";
import Dice from "react-dice-roll";

const DiceRoll: React.FC = () => {
  return <Dice onRoll={(value) => console.log(value)} />;
};

export default DiceRoll;
