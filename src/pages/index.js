import { Inter } from "@next/font/google";
import Hero from "@/components/homepage/Hero";
import FeaturePosts from "@/components/homepage/FeaturePosts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePosts />
    </>
  );
}
