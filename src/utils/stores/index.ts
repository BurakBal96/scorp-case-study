import { createContext, useContext } from "react";
import { UIStore } from "./UIStore";

export const stores = createContext({
  UIStore: new UIStore()
});

export const useStores = () => useContext(stores);