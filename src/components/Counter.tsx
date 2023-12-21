'use client';

import { useState } from 'react';
import { Box } from "@kuma-ui/core";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Box border={"3px blue dashed"} m={"1em"} p={"1em"}>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>This is a client component.</h3>
    </Box>
  );
};
