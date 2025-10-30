import Link from "next/link";
import Button from "../button/Button";
import { navItemData } from "@/data/navItemData";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="text-lg font-bold mx-auto flex justify-between items-center w-[90%]">
        <div className="p-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>
        <ul className="flex justify-center items-center gap-8">
          {navItemData.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </nav>
  );
}
