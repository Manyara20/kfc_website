import "./styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata = {
  title: "Kenya Forestry College",
  description: "Quality Training for a Changing Climate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/kfc/kfc_logo100x100.png" />
      </head>
      <body className="bg-forest-body min-h-screen relative">
        <div className="absolute inset-0 opacity-5 z-0 bg-leaf-pattern" />
        <AppRouterCacheProvider>
          <main className="relative z-10">
            {children}
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}