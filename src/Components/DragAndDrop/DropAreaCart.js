import { useState } from "react";

// Desc: DropAreaCart component for DragAndDrop
export default function DropAreaCart({ onDrop }) {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      className={`transition duration-300 ease-in-out ${
        showDrop
          ? "w-full h-24 text-[#dcdcdc] border border-[#dcdcdc] rounded-lg p-4 mb-4 opacity-1 "
          : "opacity-0"
      }`}
      onDragEnter={() => {
        setShowDrop(true);
      }}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setShowDrop(true);
      }}
      onDrop={(e) => {
        e.preventDefault();
        setShowDrop(false);
        onDrop();
      }}
    >
      Drop Here
    </section>
  );
}
