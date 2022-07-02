import { useState, useContext } from 'react';
import { ScheduleContextProvider } from './context/ScheduleContext';

const App = ()=>{
  return (
    <ScheduleContextProvider>
      <div>
        check me
      </div>
    </ScheduleContextProvider>
  )
};

export default App;
