import { Cursor } from "@/components/cursor";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Cursor>{children}</Cursor>;
};
