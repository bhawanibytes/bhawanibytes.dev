import { Button } from "../ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { Mail, Phone, FileText } from "lucide-react";
import { contactLinks, resumeLink } from "@/constants";

const Socials = () => {
  return (
    <div className="flex flex-wrap space-y-2 space-x-4">
      <a href={contactLinks.github} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="h-7 cursor-pointer rounded-md text-xs"
        >
          <FiGithub className="size-4" />
          <span>Github</span>
        </Button>
      </a>

      <a href={contactLinks.twitter} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="h-7 cursor-pointer rounded-md text-xs"
        >
          <BsTwitterX className="size-4" />
          <span>Twitter</span>
        </Button>
      </a>
      <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <Button
          variant="outline"
          className="h-7 cursor-pointer rounded-md text-xs"
        >
          <FiLinkedin className="size-4" />
          <span>LinkedIn</span>
        </Button>
      </a>

      <a href={contactLinks.email} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="h-7 cursor-pointer text-xs">
          <Mail className="size-4" />
          <span>Email</span>
        </Button>
      </a>

      <a href={contactLinks.phone} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="h-7 cursor-pointer text-xs">
          <Phone className="size-4" />
          <span>Phone</span>
        </Button>
      </a>

      <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="h-7 cursor-pointer text-xs">
          <BsWhatsapp className="size-4" />
          <span>WhatsApp</span>
        </Button>
      </a>

      <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="h-7 cursor-pointer text-xs">
          <FileText className="size-4" />
          <span>Resume</span>
        </Button>
      </a>
    </div>
  );
};

export default Socials;
