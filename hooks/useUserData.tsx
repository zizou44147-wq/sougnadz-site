import React from "react";
type Props = { children?: React.ReactNode };
export function UserDataProvider({ children }: Props) {
  return <>{children}</>;
}
export default function useUserData() {
  return { user: null, isAuthenticated: false };
}
