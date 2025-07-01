import { createContext, RefObject } from "react";

export const CursorContext = createContext<RefObject<HTMLDivElement> | null>(null)