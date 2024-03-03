import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      {/* Background */}

      {/* Heading */}
      <h1 className="text-center text-[10rem] text-[#83A180] mt-[1rem] font-bold">
        Let's Share
      </h1>

      {/* Image */}
      <Image
        src="/bowl.png"
        width={400}
        height={400}
        alt="bowl"
        className="block mx-auto -mt-[7rem]"
      />
      {/* Button */}
      <button className="bg-[#3C6E38] hover:bg-[#CAF0C7] text-white hover:text-[#3C6E38] py-3 px-16 rounded-full font-semibold block mx-auto mt-[1.6rem] transition-all">
        Get Started
      </button>
    </section>
  );
}
