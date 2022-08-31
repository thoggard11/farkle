import React from "react";
import { selectPage, Page } from "../redux/gameSlice";
import { useTypedSelector } from "../redux/store";
import Home from "./Home";
import Setup from "./Setup";
import Game from "./Game";

const Main: React.FC = () => {
  const page = useTypedSelector(selectPage);
  //const page = useTypedSelector(state => selectPage(state));
  if (page === Page.HOME) {
    return <Home />;
  } else if (page === Page.SETUP) {
    return <Setup />;
  } else {
    return <Game />;
  }
};

export default Main;
