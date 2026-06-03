"use client";
import { createContext, useContext, useState } from "react";

const SachinGoalContext = createContext();

//-----------custom hook------------------
export const useSachinGoal=()=>{
    return useContext(SachinGoalContext);
}

export const SachinGoalProvider = ({ children }) => {
  const [sachinGoal, setSachinGoal] = useState({
    "1st Goal": "get Web Dev job in one month",
    "2nd Goal": "Learn forex trading",
    "3rd Goal": "Learn Data Science",
  });

  return (
    <SachinGoalContext.Provider value={{ sachinGoal, setSachinGoal }}>
      {children}
    </SachinGoalContext.Provider>
  );
};
