"use client";
import { UserType } from "@/types/userType";
import Link from "next/link";
import { use } from "react";

export default function UserCard({ users }: { users: Promise<UserType[]> }) {
  const getAllUsers = use(users);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {getAllUsers.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {user.id}
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {user.name}
          </h3>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            <strong>Website:</strong>{" "}
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <Link
            href={`/users/${user.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            <button
              type="button"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
