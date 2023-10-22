import { BsGoogle, BsApple, BsFacebook } from "react-icons/bs";

export default function SocialAuthentication() {
  return (
    <div className="flex flex-row gap-[1.3rem]">
      <button className="text-xl">
        <BsGoogle />
      </button>
      <button className="text-xl">
        <BsApple />
      </button>
      <button className="text-xl">
        <BsFacebook />
      </button>
    </div>
  );
}
