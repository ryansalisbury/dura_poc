import { GoalKey, Question, Questionnaire, AnswerOption } from "@/types/Questionnaire";

// Convenience list of goal options you can render as cards/buttons
export const GOAL_OPTIONS: { key: GoalKey; title: string; subtitle: string }[] =
  [
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

// Helpers to generate answer options
const scaleOptions = (max = 10): AnswerOption[] =>
  Array.from({ length: max + 1 }, (_, i) => ({ id: `${i}`, label: `${i}`, value: i }));

const ynOptions = (): AnswerOption[] => [
  { id: "yes", label: "Yes", value: 1 },
  { id: "no", label: "No", value: 0 },
];

const frequencyOptions: AnswerOption[] = [
  { id: "never", label: "Never", value: 0 },
  { id: "rarely", label: "Rarely", value: 1 },
  { id: "sometimes", label: "Sometimes", value: 2 },
  { id: "often", label: "Often", value: 3 },
  { id: "daily", label: "Daily", value: 4 },
];

// Follow-up question bank keyed by goal
const FOLLOW_UP_QUESTIONS: Record<GoalKey, Question[]> = {
  KneeHealth: [
    {
      id: "knee_pain_severity",
      question: "How severe is your knee pain on average?",
      type: "singleChoice",
      options: [
        { id: "none", label: "None", value: 0 },
        { id: "mild", label: "Mild", value: 1 },
        { id: "moderate", label: "Moderate", value: 2 },
        { id: "severe", label: "Severe", value: 3 },
      ],
    },
    {
      id: "knee_pain_context",
      question: "When do you feel knee pain most?",
      type: "singleChoice",
      options: [
        { id: "stairs", label: "Stairs", value: 3 },
        { id: "squatting", label: "Squatting", value: 3 },
        { id: "after_sitting", label: "After sitting", value: 2 },
        { id: "running", label: "Running", value: 3 },
        { id: "other", label: "Other", value: 1 },
      ],
    },
    {
      id: "knee_history",
      question: "Have you had any knee injuries or surgeries?",
      type: "singleChoice",
      options: [
        { id: "none", label: "No", value: 0 },
        { id: "minor_injury", label: "Minor injury", value: 1 },
        { id: "major_injury", label: "Major injury", value: 2 },
        { id: "surgery", label: "Surgery", value: 3 },
      ],
    },
    {
      id: "knee_walk_duration",
      question: "How many minutes can you walk without knee pain?",
      type: "singleChoice",
      options: [
        { id: "lt5", label: "< 5 min", value: 0 },
        { id: "5_10", label: "5–10 min", value: 1 },
        { id: "10_20", label: "10–20 min", value: 2 },
        { id: "gt20", label: "> 20 min", value: 3 },
      ],
    },
    {
      id: "knee_squat",
      question: "Can you perform a bodyweight squat comfortably?",
      type: "singleChoice",
      options: [
        { id: "yes", label: "Yes", value: 2 },
        { id: "some", label: "Some discomfort", value: 1 },
        { id: "no", label: "No", value: 0 },
      ],
    },
  ],
  ReduceBackPain: [
    {
      id: "back_location",
      question: "Where is your back pain?",
      type: "singleChoice",
      options: [
        { id: "lower", label: "Lower", value: 2 },
        { id: "mid", label: "Mid", value: 2 },
        { id: "upper", label: "Upper", value: 2 },
      ],
    },
    {
      id: "back_frequency",
      question: "How often does your back pain occur?",
      type: "singleChoice",
      options: frequencyOptions,
    },
    {
      id: "back_bending",
      question: "Does bending or lifting aggravate your symptoms?",
      type: "singleChoice",
      options: ynOptions(),
    },
    {
      id: "back_morning_stiffness",
      question: "Do you experience morning stiffness longer than 30 minutes?",
      type: "singleChoice",
      options: ynOptions(),
    },
    {
      id: "back_sitting_tolerance",
      question: "Can you sit for 30 minutes without discomfort?",
      type: "singleChoice",
      options: [
        { id: "yes", label: "Yes", value: 2 },
        { id: "sometimes", label: "Sometimes", value: 1 },
        { id: "no", label: "No", value: 0 },
      ],
    },
  ],
  ImproveHipMobility: [
    {
      id: "hip_stiffness_side",
      question: "Do you feel stiffness in one or both hips?",
      type: "singleChoice",
      options: [
        { id: "left", label: "Left", value: 1 },
        { id: "right", label: "Right", value: 1 },
        { id: "both", label: "Both", value: 2 },
        { id: "none", label: "None", value: 0 },
      ],
    },
    {
      id: "hip_cross_legged",
      question: "Can you sit cross‑legged comfortably?",
      type: "singleChoice",
      options: [
        { id: "yes", label: "Yes", value: 2 },
        { id: "with_discomfort", label: "With discomfort", value: 1 },
        { id: "no", label: "No", value: 0 },
      ],
    },
    {
      id: "hip_stride",
      question: "Is hip tightness affecting your walking/running stride?",
      type: "singleChoice",
      options: ynOptions(),
    },
    {
      id: "hip_lunge",
      question: "Do deep lunges cause discomfort?",
      type: "singleChoice",
      options: ynOptions(),
    },
    {
      id: "hip_mobility_frequency",
      question: "How often do you perform mobility work?",
      type: "singleChoice",
      options: frequencyOptions,
    },
  ],
};

// Example mock questionnaire instances (one per goal)
export const QUESTIONNAIRES: Questionnaire[] = [
  {
    goalQuestion: "KneeHealth",
    followUpQuestions: {
      KneeHealth: FOLLOW_UP_QUESTIONS.KneeHealth,
      ReduceBackPain: [],
      ImproveHipMobility: [],
    },
  },
  {
    goalQuestion: "ReduceBackPain",
    followUpQuestions: {
      KneeHealth: [],
      ReduceBackPain: FOLLOW_UP_QUESTIONS.ReduceBackPain,
      ImproveHipMobility: [],
    },
  },
  {
    goalQuestion: "ImproveHipMobility",
    followUpQuestions: {
      KneeHealth: [],
      ReduceBackPain: [],
      ImproveHipMobility: FOLLOW_UP_QUESTIONS.ImproveHipMobility,
    },
  },
];

// Export the bank for direct lookup by selected goal
export { FOLLOW_UP_QUESTIONS };
