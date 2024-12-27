import React from "react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>admin dashboard navbar</h1>
      {children}
    </div>
  );
}
