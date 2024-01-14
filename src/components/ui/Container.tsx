import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full border p-2 max-w-[1250px] mx-auto">{children}</div>
  );
};

export default Container;
