import { ReactNode } from "react";

type AppProviderProps = Readonly<{ children: ReactNode }>;

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // Add your providers here.
    <>{children}</>
  );
};
