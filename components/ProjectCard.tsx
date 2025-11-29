import Image from "next/image";

import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  liveLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <Card className='flex flex-row justify-between md:items-center gap-5 p-4 max-md:flex-col max-md:gap-2 w-full border dark:border-neutral-800 dark:hover:border-neutral-700 transition-colors duration-200'>
      {/* Left: Image */}
      <div className='relative h-fit select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl'>
        <Image
          src={image}
          alt={`${title} Image`}
          width={300}
          height={200}
          className='w-full md:w-[300px] md:h-[190px] object-cover'
        />
        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10' />
      </div>

      {/* Right: Text content */}
      <div className='flex-1/2'>
        <div className='flex items-center justify-between tracking-wider'>
          {/* Project Title */}
          <div className='text-xl font-medium tracking-wide'>{title}</div>
          {/* Links */}
          <div className='flex gap-1 text-sm'>
            <a target='_blank' rel='noopener noreferrer' href={liveLink}>
              <Button
                variant={"secondary"}
                className='rounded gap-1 h-5 has-[>svg]:px-1 text-xs mr-1 cursor-pointer hover:bg-zinc-800/50'
              >
                <ExternalLink className='size-3' />
                Live
              </Button>
            </a>
            <span className='font-bold'>|</span>
            <a target='_blank' rel='noopener noreferrer' href={githubLink}>
              <Button
                variant={"secondary"}
                className='rounded gap-1 h-5 has-[>svg]:px-1 text-xs cursor-pointer hover:bg-zinc-800/50'
              >
                <FaGithub className='size-3' />
                Github
              </Button>
            </a>
          </div>
        </div>

        {/* Description */}
        <p className='my-2 text-sm leading-tight dark:text-muted-foreground'>
          {description}
        </p>

        {/* Tech Used */}
        <p className='my-1 text-sm font-medium dark:text-neutral-200'>
          Technologies Used:
        </p>
        <div className='mt-1.5 flex flex-wrap gap-1'>
          {tech.map((tech) => (
            <Badge
              key={tech}
              variant={"secondary"}
              className='items-center gap-0.5 rounded px-1 py-0.5 text-xs tracking-normal transition-colors duration-300 hover:bg-secondary/50 dark:text-neutral-200'
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
