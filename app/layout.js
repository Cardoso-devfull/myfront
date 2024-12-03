import { AppProvider } from './config/AppContext';

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AppProvider>
  )
}