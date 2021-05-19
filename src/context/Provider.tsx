import React from 'react';
import { ScheduleListContextProvider } from './ScheduleListContext';

/**
 * すべてのContextProviderをまとめたラッピングComponent
 */
export const Provider: React.FC = ({ children }) => {
  return (
      <ScheduleListContextProvider>
          {children}
      </ScheduleListContextProvider>
  );
};
