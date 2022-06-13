import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
    <div>
        <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
            <Image src="/assets/logo.png" width={50} height={38} alt="logo" />
            <Link href="https://www.instagram.com/b7.customs">Instagram</Link>
        </footer>
        <div className=" flex gap-1 items-center justify-center bg-black text-white p-5">
            © B7 Customs {new Date().getFullYear()}. All rights reserved
        </div>
    </div>

)

export default Footer;