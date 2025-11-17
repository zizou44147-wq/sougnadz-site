import React from "react";

type Props = { children?: React.ReactNode };

export function WantedItemsProvider({ children }: Props) {
  return <>{children}</>;
}

export default function useWantedItems() {
  return {
    items: [] as any[],
    addItem: (item: any) => {},
  };
}
