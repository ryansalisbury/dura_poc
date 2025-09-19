import { Plan } from "@/types/Plan";
import { createContext, useContext, Dispatch, SetStateAction } from "react";

export type PlanContextValue = {
  plan: Plan | undefined;
  setPlan: Dispatch<SetStateAction<Plan | undefined>>;
};

export const PlanContext = createContext<PlanContextValue | undefined>(
  undefined
);

export const usePlan = () => {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
};
