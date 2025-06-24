import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
