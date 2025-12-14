import { Separator } from "@components/ui/separator";

const Profile = () => {
  return (
    <div className="space-y-2 text-base text-zinc-200">
      <p>
        <span className="text-base font-semibold">a Software Engineer</span> who
        loves building things that
        <span className="font-semibold italic"> scale smoothly</span>.
      </p>
      <Separator className="my-4" />
      <p>
        My core strength lies in backend development, with experience across the
        full stack when required. I value performance, clarity, and writing
        maintainable code.
      </p>
      <p>
        When I’m not coding, I’m usually exploring new technologies or diving
        into movies and science.
      </p>

      <p>Open to freelance and full-time opportunities.</p>
    </div>
  );
};

export default Profile;
