import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Moveable from "react-moveable";
import { Card } from "./components/Card";
import { getPhotos } from "./components/helpers/getPhotos";

import "./styles.css";

export const App = () => {
  const targetRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((resp) => {
      setPhotos(resp);
    });
  }, []);

  return (
    <>
      {photos.map((photo) => {
        return <Card url={photo.url} title={photo.title} ref={targetRef} />;
      })}
      <Moveable
        flushSync={flushSync}
        target={targetRef.current}
        draggable={true}
        resizable={true}
        scalable={true}
        rotatable={true}
        keepRatio={true}
      />
    </>
  );
};
