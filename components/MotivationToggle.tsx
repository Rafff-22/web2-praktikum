"use client";

import { useState } from "react";

type MotivationToggleProps = {
  text: string;
};

export default function MotivationToggle({ text }: MotivationToggleProps) {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <dd className="text-gray-700">{text}</dd>}
      <button
        onClick={() => setShow(!show)}
        className="mt-2 text-sm text-blue-700 underline hover:text-blue-900"
      >
        {show ? "Sembunyikan" : "Tampilkan"} Motivasi
      </button>
    </>
  );
}