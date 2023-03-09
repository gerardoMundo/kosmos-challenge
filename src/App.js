import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { getPhotos } from "./components/helpers/getPhotos";

import "./styles.css";

export const App = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    getPhotos()
      .then((resp) => {
        const { data } = resp;
        setPhoto(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {photo.map((element) => {
        return (
          <Card
            key={element.id}
            url={element.thumbnailUrl}
            title={element.title}
          />
        );
      })}
    </>
  );
};
