import React from "react";

interface Params {
  title: string;
  sub: string;
}

export default function PageTitle({ title, sub }: Params) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{sub}</p>
    </div>
  );
}
