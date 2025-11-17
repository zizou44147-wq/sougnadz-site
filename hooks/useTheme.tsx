import React from "react";
type Props = { children?: React.ReactNode };
export function ThemeProvider({ children }: Props) {
  return <>{children}</>;
}
export default function useTheme() {
  return { theme: "light", toggleTheme: () => {} };
}
