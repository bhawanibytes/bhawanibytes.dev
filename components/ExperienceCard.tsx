import { CalendarDays, Dot } from "lucide-react";

type ExperienceCardProps = {
  title: string;
  link: string;
  role: string;
  location?: string;
  dateRange: string;
  highlights: string[];
  techStack?: string;
};

export default function ExperienceCard({
  title,
  link,
  role,
  location,
  dateRange,
  highlights,
  techStack,
}: ExperienceCardProps) {
  return (
    <div>
      {/* Company Name */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-medium tracking-wide"
      >
        {title}
      </a>

      {/* Role + Date */}
      <div className="flex justify-between text-sm font-medium dark:text-neutral-200 mt-1">
        <p>
          {role}{" "}
          {location && (
            <span className="ml-2 inline-block rounded bg-neutral-800 px-1.5 py-0.5 text-xs font-normal text-zinc-200">
              {location}
            </span>
          )}
        </p>
        <div className="flex items-center gap-1 text-xs">
          <CalendarDays className="h-4 w-4" />
          <span>{dateRange}</span>
        </div>
      </div>

      {/* Highlights & Tech Stack */}
      <ul className="mt-2 space-y-2 text-sm leading-snug">
        {highlights.map((point, i) => (
          <li key={i} className="flex items-start">
            <Dot className="mt-0.5" size={18} />
            <span className="ml-1">{point}</span>
          </li>
        ))}

        {techStack && (
          <li className="flex items-start">
            <Dot className="mt-0.5 mr-1.5" size={16} />
            <span className="">
              Tech Stack:{" "}
              <span className="font-semibold dark:text-neutral-200">
                {techStack}
              </span>
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
