import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-300 bg-opacity-10 py-12">
      <div className="mx-auto text-center px-4 text-gray-900">
        <p>©{new Date().getFullYear()} Made by Mohammad Al Samiul</p>
      </div>
    </footer>
  );
}
