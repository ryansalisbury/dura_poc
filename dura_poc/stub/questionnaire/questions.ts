import { Questionnaire, GoalKey, Question } from "@/types/Questionnaire";

// Convenience list of goal options you can render as cards/buttons
export const GOAL_OPTIONS: { key: GoalKey; title: string; subtitle: string }[] = [
  {
    key: "KneeHealth",
    title: "Improve Knee Health",
    subtitle: "Reduce pain, build strength, and move with confidence.",
  },
  {
    key: "ReduceBackPain",
    title: "Reduce Back Pain",
    subtitle: "Ease stiffness and support your spine in daily life.",
  },
  {
    key: "ImproveHipMobility",
    title: "Improve Hip Mobility",
    subtitle: "Open up tight hips for better movement and comfort.",
  },
];

// Follow-up question bank keyed by goal
const FOLLOW_UP_QUESTIONS: Record<GoalKey, Question[]> = {
  KneeHealth: [
    { question: "How severe is your knee pain on average (0–10)?", score: 0 },
    {
      question:
        "When do you feel knee pain most (stairs, squatting, after sitting)?",
      score: 0,
    },
    { question: "Have you had any knee injuries or surgeries?", score: 0 },
    {
      question: "How many minutes can you walk without knee pain?",
      score: 0,
    },
    {
      question: "Can you perform a bodyweight squat comfortably?",
      score: 0,
    },
  ],
  ReduceBackPain: [
    { question: "Where is your back pain (lower/mid/upper)?", score: 0 },
    { question: "How often does your back pain occur?", score: 0 },
    {
      question: "Does bending or lifting aggravate your symptoms?",
      score: 0,
    },
    {
      question: "Do you experience morning stiffness longer than 30 minutes?",
      score: 0,
    },
    {
      question: "Can you sit for 30 minutes without discomfort?",
      score: 0,
    },
  ],
  ImproveHipMobility: [
    { question: "Do you feel stiffness in one or both hips?", score: 0 },
    { question: "Can you sit cross‑legged comfortably?", score: 0 },
    {
      question: "Is hip tightness affecting your walking/running stride?",
      score: 0,
    },
    { question: "Do deep lunges cause discomfort?", score: 0 },
    { question: "How often do you perform mobility work?", score: 0 },
  ],
};

// Example mock questionnaire instances (one per goal)
export const QUESTIONNAIRES: Questionnaire[] = [
  {
    goalQuestion: "KneeHealth",
    followUpQuestions: { KneeHealth: FOLLOW_UP_QUESTIONS.KneeHealth },
  },
  {
    goalQuestion: "ReduceBackPain",
    followUpQuestions: { ReduceBackPain: FOLLOW_UP_QUESTIONS.ReduceBackPain },
  },
  {
    goalQuestion: "ImproveHipMobility",
    followUpQuestions: {
      ImproveHipMobility: FOLLOW_UP_QUESTIONS.ImproveHipMobility,
    },
  },
];

// Export the bank for direct lookup by selected goal
export { FOLLOW_UP_QUESTIONS };
