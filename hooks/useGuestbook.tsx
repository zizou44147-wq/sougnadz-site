import React from "react";

type Props = { children?: React.ReactNode };

export function GuestbookProvider({ children }: Props) {
  return <>{children}</>;
}

export default function useGuestbook() {
  return {
    entries: [] as any[],
    addEntry: (entry: any) => {},
  };
}
