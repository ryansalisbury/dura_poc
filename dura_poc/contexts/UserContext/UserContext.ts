import { User } from "@/types/User";
import { createContext, useContext, Dispatch, SetStateAction } from "react";
export type UserContextValue = {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
