import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header class="p-12 flex justify-end text-green-200 absolute w-screen z-20">
      <nav class="flex justify-start gap-10 flex-wrap">
        <div className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/"}>
            Нүүр хуудас
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/about"}>
            Миний тухай
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <Link className="hover:text-violet-700 skew-y-12" href={"/Contact"}>
            холбогдох
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/works"}>
            хийсэн төслүүд
          </Link>
        </div>
        <div className="text-2xl font-bold">
          <Link className="hover:text-violet-700 " href={"/download"}>
            download CV
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
