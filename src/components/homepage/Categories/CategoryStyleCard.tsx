import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CategoryStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const CategoryStyleCard = ({ title, url, className }: CategoryStyleCardProps) => {
  return (
    <Link
      href={url}
      className={cn([
        "w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover",
        className,
      ])}
    >
      {title}
    </Link>
  );
};

export default CategoryStyleCard;
