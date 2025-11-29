// upload resume line 47
import { Button } from "../ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FileText, Mail } from "lucide-react";
import { contactLinks } from "@/constants";

const Socials = () => {
  return (
    <div className='space-x-4 flex flex-wrap space-y-2'>
      <a href={contactLinks.github} target='_blank' rel='noopener noreferrer'>
        <Button
          variant='outline'
          className='text-xs h-7 rounded-md cursor-pointer'
        >
          <FiGithub className='size-4' />
          <span>Github</span>
        </Button>
      </a>

      <a href={contactLinks.twitter} target='_blank' rel='noopener noreferrer'>
        <Button
          variant='outline'
          className='text-xs h-7 rounded-md cursor-pointer'
        >
          <BsTwitterX className='size-4' />
          <span>Twitter</span>
        </Button>
      </a>
      <a href={contactLinks.linkedin} target='_blank' rel='noopener noreferrer'>
        <Button
          variant='outline'
          className='text-xs h-7 rounded-md cursor-pointer'
        >
          <FiLinkedin className='size-4' />
          <span>LinkedIn</span>
        </Button>
      </a>

      <a href={contactLinks.email} target='_blank' rel='noopener noreferrer'>
        <Button variant='outline' className='text-xs h-7 cursor-pointer'>
          <Mail className='size-4' />
          <span>Email</span>
        </Button>
      </a>

      <a href='/resume.pdf' download target='_blank' rel='noopener noreferrer'>
        <Button variant='outline' className='text-xs h-7 cursor-pointer'>
          <FileText className='size-4' />
          Resume
        </Button>
      </a>
    </div>
  );
};

export default Socials;
