'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

type errorProps = {
  error: Error & { digest?: string };
  reset?: () => void;
};
export default function Error({ error, reset }: errorProps) {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    console.log(error);
    setMessage(error.message || "An unexpected error occurred.");
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-600 to-red-500 text-white p-8">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg text-center space-y-6">
        <h1 className="text-8xl font-bold text-red-600">Error 500</h1>
        <p className="text-2xl font-semibold">
          Oops! Something went wrong on our side.
        </p>
        <p className="text-lg opacity-80">{message}</p>

        {/* Go Back Button */}
        <Link
          href="/"
          passHref
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold transform transition duration-300 hover:scale-110 hover:bg-blue-700 active:scale-95"
          onClick={() => reset?.()}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
