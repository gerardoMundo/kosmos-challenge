import { flushSync } from "react-dom";
import Moveable from "react-moveable";

export const MoveablePicture = () => {
  return (
    <Moveable
      flushSync={flushSync}
      target={document.querySelector(".child")}
      edge={false}
      keepRatio={true}
      resizable={true}
      origin
    />
  );
};
