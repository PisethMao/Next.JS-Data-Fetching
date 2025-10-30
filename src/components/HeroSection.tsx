"use client";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="font-english">
      <section
        className="hero-section relative h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-center items-center h-full text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-lg mb-6">
              Explore the most amazing features and services
            </p>
            <a
              href="#services"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => router.push("/blog")}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
