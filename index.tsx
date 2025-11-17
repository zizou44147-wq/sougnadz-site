import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LocalizationProvider } from './hooks/useLocalization';
import { ThemeProvider } from './hooks/useTheme';
import { UserDataProvider } from './hooks/useUserData';
import { WantedItemsProvider } from './hooks/useWantedItems';
import { AuthProvider } from './hooks/useAuth';
import { GuestbookProvider } from './hooks/useGuestbook';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LocalizationProvider>
      <ThemeProvider>
        <UserDataProvider>
          <WantedItemsProvider>
            <AuthProvider>
              <GuestbookProvider>
                <App />
              </GuestbookProvider>
            </AuthProvider>
          </WantedItemsProvider>
        </UserDataProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>
);