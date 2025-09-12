export interface Exercise {
  id: string;
  coach: string;
  title: string;
  description: string;
  difficultyLevel: Difficulty;
  duration: string;
  allocatedSessionId: string;
}

export enum Difficulty {
  REST = "REST",
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERIENCED = "EXPERIENCED",
}
