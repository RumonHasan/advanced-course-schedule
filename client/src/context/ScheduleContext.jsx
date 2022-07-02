import { createContext, useContext } from "react";

const ScheduleContext = createContext();

export const ScheduleContextProvider = ({children})=>{
    return (
        <ScheduleContext.Provider value={{}}>
            {children}
        </ScheduleContext.Provider>
    )
}

export const useScheduleContext = ()=>{
    return useContext(ScheduleContext);
}