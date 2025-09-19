import React, { useState } from "react";
import { Plan } from "@/types/Plan";
import { PlanContext } from "./PlanContext";

type Props = {
  children: React.ReactNode;
};

export function PlanProvider({ children }: Props) {
  const [plan, setPlan] = useState<Plan | undefined>(undefined);
  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
}
