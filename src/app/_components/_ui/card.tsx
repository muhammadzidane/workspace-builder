import React from "react";

interface CardProps extends React.PropsWithChildren {
  className?: string;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      {children}
    </div>
  );
};

export default Card;
