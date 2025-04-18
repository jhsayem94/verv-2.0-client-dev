"use client";

import { useRef, useState, useEffect } from "react";

export default function MultiClickFocusInput() {
  const inputRef = useRef(null);

  // Track which tags are clicked
  const [clickedTags, setClickedTags] = useState({
    tag1: false,
    tag2: false,
    tag3: false,
  });

  // Focus input when all tags are clicked
  useEffect(() => {
    const allClicked = Object.values(clickedTags).every(Boolean);
    if (allClicked) {
      inputRef.current?.focus();
    }
  }, [clickedTags]);

  const handleClick = (tag) => {
    setClickedTags((prev) => ({ ...prev, [tag]: true }));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-2">
        <div
          onClick={() => handleClick("tag1")}
          className={`px-4 py-2 border rounded cursor-pointer ${
            clickedTags.tag1 ? "bg-green-200" : "bg-gray-100"
          }`}
        >
          Tag 1
        </div>
        <div
          onClick={() => handleClick("tag2")}
          className={`px-4 py-2 border rounded cursor-pointer ${
            clickedTags.tag2 ? "bg-green-200" : "bg-gray-100"
          }`}
        >
          Tag 2
        </div>
        <div
          onClick={() => handleClick("tag3")}
          className={`px-4 py-2 border rounded cursor-pointer ${
            clickedTags.tag3 ? "bg-green-200" : "bg-gray-100"
          }`}
        >
          Tag 3
        </div>
      </div>

      <input
        ref={inputRef}
        type="text"
        placeholder="This input gets focused"
        className="w-64 border px-4 py-2 rounded focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
