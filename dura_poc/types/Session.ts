import { Difficulty, Exercise } from "./Exercise";

export interface Session {
  id: string;
  title: string;
  description: string;
  totalDuration: string;
  difficulty: Difficulty;
  exercises: Exercise[];
  allocatedDate?: Date;
}
