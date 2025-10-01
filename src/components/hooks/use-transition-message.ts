import { useState } from "react";

type TransitionState =
  | { status: "idle"; message?: undefined }
  | { status: "pending"; message?: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function useTransitionMessage(initial: TransitionState = { status: "idle" }) {
  const [state, setState] = useState<TransitionState>(initial);

  return [state, setState] as const;
}





