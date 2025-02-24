import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-primary-800 text-white px-8">
      <div className="flex-center wrapper flex-between flex flex-col gap-6 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={35}
            height={35}
          />
        </Link>
        <div className="flex gap-4">
          <Image
            src={"/assets/icons/instagram.svg"}
            alt={"instagram"}
            width={20}
            height={20}
          />
          <Image
            src={"/assets/icons/twetter.svg"}
            alt={"instagram"}
            width={20}
            height={20}
          />
          <Image
            src={"/assets/icons/whatsapp.svg"}
            alt={"instagram"}
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
