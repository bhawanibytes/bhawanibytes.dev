import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ViewAllButton = ({
  title,
  className = "",
  href,
}: {
  title: string;
  className?: string;
  href: string;
}) => {
  return (
    <div className='flex justify-end -mt-2'>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-fit h-7 px-1 text-sm rounded text-neutral-400 cursor-pointer hover:text-zinc-300 transition-colors duration-200",
          className
        )}
      >
        View all {title}
        <ArrowUpRight className='size-4' />
      </Link>
    </div>
  );
};

export default ViewAllButton;
