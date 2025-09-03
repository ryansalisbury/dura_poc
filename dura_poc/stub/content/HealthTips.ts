// stub/content/HealthTips.ts
import { ImageSourcePropType } from "react-native";

export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: ImageSourcePropType; // was string — now matches your require()
  date: string; // dd/mm/yyyy
}

const img1 = require("@/assets/images/physioStockImages/stock-physio-image-1.webp");
// If you have this one (you used it elsewhere); otherwise reuse img1:
const img2 = require("@/assets/images/physioStockImages/stock-physio-image2.avif");

export const stubData: Content[] = [
  {
    id: "tip-back-morning-mobility-001",
    title: "Morning Back Mobility (5 min)",
    description:
      "Ease stiffness with cat–cow, pelvic tilts, and child’s pose breathing. Move within comfort and keep breaths slow.",
    thumbnail: img1,
    date: "28/08/2025",
  },
  {
    id: "tip-core-bracing-002",
    title: "Core Bracing 101",
    description:
      "Learn gentle abdominal bracing: exhale, tighten your belt-line 20–30%, breathe into your ribs, and keep shoulders relaxed.",
    thumbnail: img2,
    date: "26/08/2025",
  },
  {
    id: "tip-hip-hinge-003",
    title: "Hip Hinge Basics",
    description:
      "Protect your back by hinging from the hips. Soft knees, push hips back, neutral spine—practice with a dowel along the back.",
    thumbnail: img1,
    date: "24/08/2025",
  },
  {
    id: "tip-glute-activation-004",
    title: "Glute Activation Mini-Flow",
    description:
      "Bridge holds, side-lying clams, and banded walks to wake up glutes before longer walks or strength sessions.",
    thumbnail: img2,
    date: "22/08/2025",
  },
  {
    id: "tip-desk-reset-neck-005",
    title: "Desk Reset for Neck/Shoulders",
    description:
      "Every 45–60 min: chin tucks, scap squeezes, and upper-trap stretches. 60–90 seconds total to reduce tightness.",
    thumbnail: img1,
    date: "20/08/2025",
  },
  {
    id: "tip-ankle-mobility-006",
    title: "Ankle Mobility for Squats",
    description:
      "Wall knee-to-toe rocks (heel down) and calf raises help depth and knee tracking. Aim for smooth, pain-free reps.",
    thumbnail: img2,
    date: "18/08/2025",
  },
  {
    id: "tip-hamstring-sliders-007",
    title: "Hamstring Nerve Sliders",
    description:
      "Gently extend knee and flex ankle, then release—no forcing a deep stretch. Great for sciatic irritability.",
    thumbnail: img1,
    date: "16/08/2025",
  },
  {
    id: "tip-shoulder-scap-control-008",
    title: "Shoulder Blade Control",
    description:
      "Practice upward rotation: wall slides + scap push-ups. Keep ribs down and neck long for smooth motion.",
    thumbnail: img2,
    date: "14/08/2025",
  },
  {
    id: "tip-walk-progression-009",
    title: "Walking Progression Plan",
    description:
      "Start with 10–15 min easy walks. Add 2–3 min each session if symptoms stay calm. Consistency beats intensity.",
    thumbnail: img1,
    date: "12/08/2025",
  },
  {
    id: "tip-breathing-pain-010",
    title: "Breathing to De-Tense",
    description:
      "Box breathing (4-in, 4-hold, 4-out, 4-hold) to reduce guarding before mobility work or after a flare-up.",
    thumbnail: img2,
    date: "10/08/2025",
  },
];
