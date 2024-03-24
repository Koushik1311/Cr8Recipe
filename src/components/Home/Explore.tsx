import Image from "next/image";
import React from "react";

type Props = {};

export default function Explore({}: Props) {
  return (
    <div>
      <Image
        src="/victoria.jpg"
        width={200}
        height={200}
        quality={100}
        alt="recipe-img"
        className="h-40 rounded-full w-40 object-cover"
      />
    </div>
  );
}
