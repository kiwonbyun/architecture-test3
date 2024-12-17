"use client";
import { useCounter } from "@packages/core";
import { Button } from "@packages/ui";
import React from "react";

function DetailPage() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      {count}
      <Button onClick={increment}>up</Button>
      <Button onClick={decrement}>down</Button>
    </div>
  );
}

export default DetailPage;
