import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/grid";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
