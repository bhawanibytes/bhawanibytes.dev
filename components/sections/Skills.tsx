import Image from "next/image";
import { Badge } from "../ui/badge";
import { categoryLabels, techStack } from "@utils/techStack";

const SkillsSection = () => {
  return (
    <div className="space-y-8">
      {Object.entries(techStack).map(([category, items]) => (
        <div key={category}>
          <SkillSectionHeading
            className="mb-2"
            title={categoryLabels[category as keyof typeof techStack]}
          />
          <div className="flex flex-wrap gap-4">
            {items.map(({ title, img }) => (
              <div key={title} className="flex flex-col items-center">
                <Badge className="flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-neutral-200 hover:dark:bg-neutral-800/20">
                  <Image src={img} alt={title} width={15} height={15} />
                  {title}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

function SkillSectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={`text-muted-foreground text-xs ${className}`}
    >{`< ${title} />`}</h3>
  );
}
