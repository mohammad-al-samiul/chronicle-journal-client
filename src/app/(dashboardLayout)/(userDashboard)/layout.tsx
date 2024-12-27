import React, { ReactNode } from "react";

export default function UserDashbaordLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <h1>user dashboard navbar</h1>
      {children}
    </div>
  );
}
