"use client";

import { Button } from "../Button/Button";

export function LogToken() {
  return (
    <Button
      color="green"
      onClick={() => {
        fetch("/api/token");
      }}
    >
      Logar token em server side
    </Button>
  );
}
