export type GoalKey = "KneeHealth" | "ReduceBackPain" | "ImproveHipMobility"; // what is the goal of the user (improve hip health, improve mobility, reduce knee pain)

export type Question = {
  question: string;
  score: number; // e.g., Likert 0-10 or 0-5
};

export interface Questionnaire {
  // The user's selected top-level goal for this questionnaire instance
  goalQuestion: GoalKey;
  // Follow-up questions keyed by goal; typically contains only the selected goal
  followUpQuestions: Record<GoalKey, Question[]>;
}
