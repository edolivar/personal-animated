import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/hero";
import Grid from "@/components/grid";
import { navItems } from "@/data";
import RecentProjects from "@/components/recentprojects";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
