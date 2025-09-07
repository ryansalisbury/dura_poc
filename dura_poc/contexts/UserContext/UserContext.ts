import { user1 } from "@/stub/user/mainUser";
import { User } from "@/types/User";
import { createContext } from "react";

export const UserContext = createContext<User>(user1);
