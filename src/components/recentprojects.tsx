import { projects } from "@/data";
import { PinContainer } from "./ui/3dpin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        a small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div
        // This is your grid container
        className="
        mt-10
        grid
       grid-cols-1
      lg:grid-cols-2
      gap-4
      max-w-7xl mx-auto
    "
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="h-[35rem] w-full flex items-center justify-center  "
          >
            <PinContainer title={title} href={link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[27rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base  text-black dark:text-slate-100">
                  {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{des}</span>
                </div>

                <img
                  src={img}
                  className="flex flex-1 w-full rounded-lg mt-4 object-cover"
                  style={{ width: "370px", height: "200px" }}
                />
                <div className="flex items-center justify-center my-4">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-slate-200 dark:bg-black  lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
