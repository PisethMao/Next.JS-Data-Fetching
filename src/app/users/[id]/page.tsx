"use client";
import { UserDetailType } from "@/types/userType";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const userId = id;
  const [user, setUsers] = useState<UserDetailType | null>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  });
  console.log(userId);
  return (
    <div className="p-4 font-english">
      User Page {userId}{" "}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl w-full sm:w-11/12 md:w-3/4 lg:w-1/2 p-8 space-y-8 transform transition-all hover:scale-105 duration-300">
          {user ? (
            <div className="space-y-8">
              {/* Header Section */}
              <h1 className="text-4xl font-extrabold text-gray-800 text-center">
                User Details
              </h1>

              {/* Basic User Information */}
              <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
                <div className="flex justify-between text-lg font-medium text-gray-700">
                  <p>Name:</p>
                  <p>{user.name}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-700">
                  <p>Username:</p>
                  <p>{user.username}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-700">
                  <p>Email:</p>
                  <p>{user.email}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-700">
                  <p>Phone:</p>
                  <p>{user.phone}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-700">
                  <p>Website:</p>
                  <p className="text-blue-600 hover:text-blue-700">
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {user.website}
                    </a>
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Address
                </h2>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Street:</p>
                  <p>{user.address?.street}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Suite:</p>
                  <p>{user.address?.suite}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>City:</p>
                  <p>{user.address?.city}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Zipcode:</p>
                  <p>{user.address?.zipcode}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Geo Coordinates:</p>
                  <p>
                    Lat: {user.address?.geo?.lat}, Long:{" "}
                    {user.address?.geo?.lng}
                  </p>
                </div>
              </div>

              {/* Company Section */}
              <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Company
                </h2>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Company Name:</p>
                  <p>{user.company?.name}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Catchphrase:</p>
                  <p>{user.company?.catchPhrase}</p>
                </div>
                <div className="flex justify-between text-lg text-gray-700">
                  <p>Business:</p>
                  <p>{user.company?.bs}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full text-xl text-gray-600">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
