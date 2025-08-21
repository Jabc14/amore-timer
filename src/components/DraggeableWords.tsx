"use client";
import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

type Props = {
  words: string[];
  target: string[];
  onSolved: () => void;
};

export default function DraggableWords({ words, target, onSolved }: Props) {
  const [list, setList] = useState<string[]>(words);

  useEffect(() => setList(words), [words]);

  useEffect(() => {
    if (list.join(" ") === target.join(" ")) onSolved();
  }, [list, target, onSolved]);

  return (
    <Reorder.Group
      axis="x"
      onReorder={setList}
      values={list}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {list.map((w) => (
        <Reorder.Item
          key={w + Math.random()}
          value={w}
          style={{
            padding: "0.5rem 1rem",
            margin: "0.25rem",
            background: "#ffe6f0",
            borderRadius: "0.5rem",
            cursor: "grab",
          }}
        >
          {w}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
