import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Engineer: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <Image
      src={`/assets/b7-customs-${id}.png`}
      alt={name}
      width={1555}
      height={1555}
      className="rounded-full"
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={link}>
        <a target="_blank">{socialId}</a>
      </Link>
    </div>
  </div>
);

export default Engineer;
