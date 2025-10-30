import { Post } from "@/types/postType";

export default async function BlogCard() {
  const ENDPOINT = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${ENDPOINT}posts`);
  const post: Post[] = await res.json();
  console.log(post);
  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
      {post.map((data) => (
        <div key={data.id} className="border p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-700">{data.body}</p>
        </div>
      ))}
    </div>
  );
}
