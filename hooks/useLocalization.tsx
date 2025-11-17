import React from "react";

type Props = { children?: React.ReactNode };

export function LocalizationProvider({ children }: Props) {
  return <>{children}</>;
}

export default function useLocalization() {
  return {
    locale: "fr",
    t: (k: string) => k,
  };
}
