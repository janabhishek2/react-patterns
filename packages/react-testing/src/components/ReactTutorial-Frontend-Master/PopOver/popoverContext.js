import { createContext, useContext } from "react";

const PopOverContext = createContext({});

const usePopOverContext = () => useContext(PopOverContext);

export default PopOverContext;
export { usePopOverContext };
