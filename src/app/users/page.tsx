import UserCard from "@/components/cards/UserCard";
import { UserType } from "@/types/userType";
async function fetchUsers() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${BASE_URL}users`);
  const data: UserType[] = await response.json();
  return data;
}
export default function page() {
  const users = fetchUsers();
  return (
    <div className="p-4 font-english">
      User Page <UserCard users={users} />
    </div>
  );
}
