import { Heart } from "lucide-react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className='h-full text-xs sm:text-sm w-full mb-4'>
      <Separator className='mb-3' />
      <div className='flex justify-between gap-3'>
        <div>© 2025. All rights reserved.</div>
        <div>
          <span className=''>
            Made with <Heart className='inline border-none size-5' /> by{" "}
          </span>
          <span className=''>bhawanibytes</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
