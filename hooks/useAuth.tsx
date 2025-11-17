import React from "react";

type Props = { children?: React.ReactNode };

export function AuthProvider({ children }: Props) {
  return <>{children}</>;
}

export default function useAuth() {
  return {
    user: null as any,
    login: (u?: any) => {},
    logout: () => {},
    isAuthenticated: false,
  };
}
