import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Bhawani Singh | Software Engineer",
  description = "I'm Bhawani, a software engineer who enjoys building things that scale smoothly. Mostly focused on the backend, sometimes full stack. Explore my work, tech-skills, and experience.",
  image = "/bhawaniBytesThumbnail.png",
  icons = "/bhawanibytes.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://bhawanibytes.dev",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Bhawani Singh aka BhawaniBytes Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@bhawanibytes",
    },
    // icons,
    metadataBase: new URL("https://bhawanibytes.dev"),
    robots: {
      index: true,
      follow: true,
    },
  };
}
