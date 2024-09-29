"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");  
  }, [router]);

  return (
    <div>
      <h1 className="text-4xl">Hello.....</h1>
    </div>
  );
}
