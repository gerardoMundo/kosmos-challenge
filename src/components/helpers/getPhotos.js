import { api } from "../../services/api";

export const getPhotos = async () => {
  const resp = await api.get("/photos?albumId=1");

  return resp;
};
