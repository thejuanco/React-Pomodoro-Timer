import { useState, createContext, useEffect } from "react";

const CounterContext = createContext()

const CounterProvider = ({ children }) => {
    //Inicializa el contador
    const WORK_TIME = 25 * 60

    const [time, setTime] = useState(WORK_TIME)

    useEffect(() => {
        document.title = `${time} `
    }, [time])

    return (
        <CounterContext.Provider value={{ time, setTime, WORK_TIME }}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterProvider }

export default CounterContext;