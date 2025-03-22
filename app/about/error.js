"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }) {

  useEffect(() => {
    console.error("An error occurred");
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Reload Page
      </button>
    </div>
  )
}