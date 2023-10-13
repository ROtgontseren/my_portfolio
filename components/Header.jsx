import React from "react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <header class="p-12 flex justify-end text-white absolute w-screen z-20">
      <nav class="flex justify-start gap-10 flex-wrap">
        <li className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/"}>
            Нүүр хуудас
          </Link>
        </li>
        <li className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/about"}>
            Миний тухай
          </Link>
        </li>
        <li className="text-2xl font-bold">
          <Link className="hover:text-violet-700 skew-y-12" href={"/Contact"}>
            холбогдох
          </Link>
        </li>
        <li className="text-2xl font-bold">
          <Link className="hover:text-violet-700" href={"/works"}>
            хийсэн төслүүд
          </Link>
        </li>
        <li className="text-2xl font-bold">
          <Link className="hover:text-violet-700 " href={"/download"}>
            download CV
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
