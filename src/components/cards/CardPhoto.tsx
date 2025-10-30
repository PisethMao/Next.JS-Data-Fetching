"use client";
import { Photo } from "@/types/photoType";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CardPhoto() {
  const [photos, setPhoto] = useState<Photo[]>([]);
  useEffect(() => {
    const ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL;
    fetch(`${ENDPOINT}photos?_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setPhoto(data);
      });
  }, []);
  console.log("ah ach: ", photos);
  return (
    <div className="grid grid-cols-4 gap-4">
      {photos.map((photo: Photo) => (
        <div key={photo.id} className="border p-2 rounded">
          <Image
            className="w-full"
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
            unoptimized
          />
          <h3 className="mt-2 text-sm">{photo.title}</h3>
          <p className="text-gray-700 text-base">{photo.albumId}</p>
        </div>
      ))}
    </div>
  );
}
