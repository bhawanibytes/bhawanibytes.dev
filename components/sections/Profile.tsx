import { Separator } from "@components/ui/separator";

const Profile = () => {
  return (
    <div className="space-y-2 text-base text-zinc-200">
      <p>
        <span className="text-base font-semibold">
          a Backend-focused Software Engineer
        </span>{" "}
        specializing in{" "}
        <span className="font-semibold italic">
          scalable APIs, real-time systems, and type-safe full-stack
          applications
        </span>
        .
      </p>
      <Separator className="my-4" />
      <p>
        My expertise lies in building high-performance backend systems with
        Node.js, PostgreSQL, and Redis. I architect type-safe APIs using tRPC
        and Drizzle ORM, ensuring reliability and maintainability at scale.
      </p>
      <p>
        I'm passionate about performance optimization, clean architecture, and
        writing code that's both efficient and easy to maintain. Whether it's
        real-time WebSocket communication or complex database schemas, I focus
        on solutions that scale smoothly.
      </p>
      <p>
        When I'm not coding, I'm exploring new technologies, diving into system
        design patterns, or enjoying movies and science.
      </p>

      <p>Open to freelance and full-time opportunities.</p>
    </div>
  );
};

export default Profile;
