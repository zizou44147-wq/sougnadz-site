import React from "react";

type Props = { children?: React.ReactNode };

export function ReportAdProvider({ children }: Props) {
  return <>{children}</>;
}

export default function useReportAd() {
  return {
    reports: [] as any[],
    reportAd: (adId: any, reason: string) => {},
  };
}
