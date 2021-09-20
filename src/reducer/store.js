import React, { createContext, useReducer } from "react";

const initialState = {
  error: false,
  images: [],
  loading: false,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CLEAR_IMAGES":
        return initialState;
      case "LOAD_IMAGES":
        return {
          error: false,
          images: [],
          loading: true,
        };
      case "LOAD_IMAGES_SUCESS":
        return {
          error: false,
          images: [...action.result.items],
          loading: false,
        };
      case "LOAD_IMAGES_FAIL":
        return {
          error: true,
          images: [],
          loading: false,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
