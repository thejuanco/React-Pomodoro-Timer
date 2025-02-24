import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const useCounter = () => {
    return useContext(CounterContext)
}

export default useCounter;