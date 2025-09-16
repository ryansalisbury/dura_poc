export type GoalKey = "KneeHealth" | "ReduceBackPain" | "ImproveHipMobility"; // what is the goal of the user (improve hip health, improve mobility, reduce knee pain)

export type AnswerOption = {
  id: string;
  label: string; // visible label (e.g., "Often")
  value: number; // numeric value for scoring/analytics
};

export type Question = {
  id: string;
  question: string;
  type: "singleChoice" | "scale"; // can extend to 'multipleChoice' later
  options: AnswerOption[]; // answer choices or generated scale options
};

export interface Questionnaire {
  // The user's selected top-level goal for this questionnaire instance
  goalQuestion: GoalKey;
  // Follow-up questions keyed by goal; typically contains only the selected goal
  followUpQuestions: Record<GoalKey, Question[]>;
}
