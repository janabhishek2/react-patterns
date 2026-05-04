import { createContext, useContext } from "react";

const PopOverContext = createContext(null);

const usePopOverContext = useContext(PopOverContext);

export default PopOverContext;
export { usePopOverContext };
