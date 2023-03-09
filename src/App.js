import { useRef } from "react";
import { flushSync } from "react-dom";
import Moveable from "react-moveable";
import { Card } from "./components/Card";

import "./styles.css";

export const App = () => {
  const targetRef = useRef(null);
  console.log(targetRef);

  return (
    <>
      <Card ref={targetRef} />
      <Moveable
        flushSync={flushSync}
        target={targetRef.current}
        draggable={true}
        resizable={true}
        scalable={true}
        rotatable={true}
      />
    </>
  );
};
