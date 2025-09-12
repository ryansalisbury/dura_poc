import { Session } from "./Session";

export interface Plan {
  id: string;
  title: string;
  Sessions: Session[];
}
