import React, { createContext, useState } from 'react';
import { ScheduleDate, initScheduleDate } from '../model/ScheduleDate';

type ScheduleListContextProps = {
  scheduleList: ScheduleDate;
  setScheduleList: React.Dispatch<React.SetStateAction<ScheduleDate>>;
};

/**
 * ログインContextの作成
 */
export const ScheduleListContext = createContext<ScheduleListContextProps>({
  scheduleList: initScheduleDate,
  setScheduleList: () => console.warn('no function'),
});

/** ログインContextのProvider */
export const ScheduleListContextProvider: React.FC = ({ children }) => {
  const [scheduleList, setScheduleList] = useState<ScheduleDate>(initScheduleDate);
  return (
    <ScheduleListContext.Provider
      value={{
        scheduleList,
        setScheduleList,
      }}
    >
      {children}
    </ScheduleListContext.Provider>
  );
};
