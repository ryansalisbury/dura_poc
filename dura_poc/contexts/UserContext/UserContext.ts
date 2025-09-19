import { User } from "@/types/User";
import { createContext, useContext } from "react";
export type UserContextValue = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
