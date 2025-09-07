import React from "react";
import { UserContext } from "./UserContext";
import { user1 } from "@/stub/user/mainUser";

type Props = {
  children: React.ReactNode;
};

const defaultUser = user1;

export function UserProvider({ children }: Props) {
  return (
    <UserContext.Provider value={defaultUser}>{children}</UserContext.Provider>
  );
}
