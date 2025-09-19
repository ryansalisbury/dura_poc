import { user1 } from "@/stub/user/mainUser";
import { User } from "@/types/User";
import React, { useState } from "react";
import { UserContext } from "./UserContext";

type Props = {
  children: React.ReactNode;
};

const defaultUser = user1;

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
