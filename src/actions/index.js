import axios from "axios";

const API_URL =
  "https://getbycors.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=";

const CLEAR_IMAGES = "CLEAR_IMAGES";
const LOAD_IMAGES = "LOAD_IMAGES";
const LOAD_IMAGES_SUCESS = "LOAD_IMAGES_SUCESS";
const LOAD_IMAGES_FAIL = "LOAD_IMAGES_FAIL";

export const clearImages = async () => {
  return {
    type: CLEAR_IMAGES,
  };
};

export const loadImages = async () => {
  return {
    type: LOAD_IMAGES,
  };
};

export const fetchImages = (tag) => {
  return axios
    .get(`${API_URL}${tag}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((res) => ({
      type: LOAD_IMAGES_SUCESS,
      result: res.data,
    }))
    .catch((err) => ({
      type: LOAD_IMAGES_FAIL,
    }));
};
