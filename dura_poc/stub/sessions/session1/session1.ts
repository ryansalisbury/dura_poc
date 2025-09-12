import { Difficulty } from "@/types/Exercise";
import { Session } from "@/types/Session";
import {
  exercisesSession001,
  exercisesSession002,
  exercisesSession003,
} from "@/stub/sessions/session1/exercises";

export const session1: Session = {
  id: "session-001",
  title: "Foundations: Mobility + Core Control",
  description:
    "A beginner session focusing on breath, gentle spinal mobility, hip hinge patterning, and basic core/glute control.",
  totalDuration: "28m",
  difficulty: Difficulty.BEGINNER,
  exercises: exercisesSession001,
  allocatedDate: new Date("2025-08-29T09:00:00.000Z"),
};

export const session2: Session = {
  id: "session-002",
  title: "Progression: Thoracic + Hinge Control",
  description:
    "Progress thoracic mobility and hinge control with light isometrics and side plank variations.",
  totalDuration: "30m",
  difficulty: Difficulty.BEGINNER,
  exercises: exercisesSession002,
  allocatedDate: new Date("2025-09-01T09:00:00.000Z"),
};

export const session3: Session = {
  id: "session-003",
  title: "Integration: Split Squat + Stability",
  description:
    "Integrate lower body isometrics and core stability while maintaining mobility work.",
  totalDuration: "32m",
  difficulty: Difficulty.BEGINNER,
  exercises: exercisesSession003,
  allocatedDate: new Date("2025-09-03T09:00:00.000Z"),
};

export const sessions: Session[] = [session1, session2, session3];
