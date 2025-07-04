import { BackButton } from "./back-button";

export const Projects = () => {

  const PROJECTS = [
    {
      title: "unfold ui clone",
      description:
        "This is an unfold websites ui clone depicting the skills i have. built using tailwindcss, motion, nextjs.",
      year: "2025",
      image: "",
    },
    {
      title: "nexus",
      description:
        "This is an full stack project, I have built it with miniaml design and its responsive. built using tailwindcss, motion, nextjs.",
      year: "2025",
      image: "",
    },
    {
      title: "cool youtube clone",
      description:
        "This is an youtube clone remastering the design and in a minimal way. built using tailwindcss, motion, nextjs.",
      year: "2024",
      image: "",
    },
    {
      title: "thoughts",
      description:
        "This a full stack blogging app, where i used different libraries for design.",
      year: "2024",
      image: "",
    },
    {
      title: "dukaan",
      description:
        "This is an dukaan ui clone depicting the skills i have. built using tailwindcss, react.",
      year: "2024",
      image: "",
    },
  ];


  return (
    <div className="min-h-screen mx-20 my-20">
      <BackButton />
      <div className="text-white text-5xl font-semibold text-center">
        projects
      </div>
      <div className="mt-10 flex flex-col items-center max-w-3xl gap-4 mx-auto w-full">
        {PROJECTS.map((p, idx) => (<div key={idx} className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-2 border px-2 py-2 font-medium">{p.year}</div>
            <div className="col-span-8 border flex flex-col px-4 py-2">
                <div className="font-semibold text-xl">{p.title}</div>
                <div className="text-muted-foreground">{p.description}</div>
            </div>
            <div className="col-span-2 border px-2 py-2">image</div>
        </div>))}
      </div>
    </div>
  );
};
