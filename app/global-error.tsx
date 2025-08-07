"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <h1 className="text-2xl text-red-600 font-bold">Something went wrong!</h1>
        <NextError statusCode={500} />
      </body>
    </html>
  );
}
