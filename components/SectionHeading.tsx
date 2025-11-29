import { signika } from "@utils/fonts";
import { cn } from "@lib/utils";

const SectionHeading = ({ name }: { name: string }) => {
  return (
    <h2 className={cn("font-semibold text-3xl mb-4", signika.className)}>
      {name}
    </h2>
  );
};

export default SectionHeading;
