import { api } from "../../services/api";

export const getPhotos = async () => {
  try {
    const { data } = await api.get("/photos?albumId=1");

    return data;
  } catch (error) {
    console.log(error);
  }
};
