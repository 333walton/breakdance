import React, { createContext, useContext } from 'react';

export type Notification = { id: string; message: string; type?: 'info' | 'warning' | 'success' };

export const NotificationsContext = createContext<{
  notify: (n: { message: string; type?: Notification['type'] }) => void;
}>({
  notify: () => {},
});

export const useNotifications = () => useContext(NotificationsContext);

export default useNotifications;
