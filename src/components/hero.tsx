import { HeroGrid } from "./ui/hero-grid";
import { Spotlight } from "./ui/spotlight";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-10 left-40 md:left-20 md:top-10 h-screen hidden dark:block"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-40 md:left-20 md:top-10 h-screen dark:hidden"
          fill="black"
        />
        <Spotlight className=" left-full h-[80-vh] w-[50vw]" fill="grey" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="grey" />
      </div>
      <div>
        <HeroGrid />
      </div>
    </div>
  );
};

export default Hero;
