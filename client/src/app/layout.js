"use client";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import menuIcon from "../../public/menuIcon.png";
import oruLogo from "../../public/oru_logo.png";
import avatar from "../../public/avatar.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({ children }) {
    const [userOptionsVisibility, setUserOptionsVisibility] = useState(false);
    const [sideBarVisibility, setSideBarVisibility] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();
    const tabs = [
        { name: "My Profile", url: "/" },
        { name: "My Connections", url: "/connections" },
    ];
    const isBelowMd = () => window.innerWidth < 768;
    const toggleMenu = (val) => {
        if (val) {
            setSideBarVisibility(true);
            menuRef.current.focus();
        } else {
            setSideBarVisibility(false);
        }
    };

    return (
        <html lang="en">
            <body className={`${inter.className} bg-[color:var(--smoke)]`}>
                {/* topbar */}
                <div className="z-10 bg-white flex justify-between items-center py-2 px-4 border-b-2 border-[color:var(--border-color)] sticky top-0 w-full">
                    <div className="flex">
                        <Image
                            alt=""
                            src={menuIcon}
                            height={40}
                            className="cursor-pointer"
                            onClick={() => toggleMenu(true)}
                            title="Menu"
                        />
                        <Image
                            alt=""
                            src={oruLogo}
                            height={40}
                            className="ps-3 cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <IoNotificationsOutline
                            size={28}
                            className="cursor-pointer"
                        />
                        <div
                            className="flex ms-3"
                            tabIndex={1}
                            onBlur={() => setUserOptionsVisibility(false)}
                        >
                            <div
                                className="avatar md:border-2 md:p-2 md:rounded-lg cursor-pointer flex items-center"
                                onClick={() =>
                                    setUserOptionsVisibility((prev) => !prev)
                                }
                            >
                                <Image alt="" src={avatar} height={50} />
                                <div className="ms-1 hidden md:block text-[color:var(--primary)]">
                                    <p className="text-sm font-medium">
                                        Welcome Back,
                                    </p>
                                    <p className="text-xl font-semibold">
                                        Rick Paramanik
                                    </p>
                                </div>
                                <FiChevronDown
                                    className="hidden md:block text-[color:var(--primary)]"
                                    size={30}
                                />
                            </div>
                            <div
                                className={
                                    "paper transition-all absolute top-16 right-3" +
                                    (userOptionsVisibility ? "" : " hidden")
                                }
                            >
                                <ul className="list-none">
                                    <li>option 1</li>
                                    <li>option 2</li>
                                    <li>option 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* sidebar */}
                <div
                    ref={menuRef}
                    tabIndex={1}
                    onBlur={() => toggleMenu(false)}
                    className={`${
                        !isBelowMd()
                            ? "left-0"
                            : sideBarVisibility
                            ? "left-0"
                            : "left-[-300px]"
                    } abcd bg-white p-5 z-10 fixed top-0 h-screen w-[300px] flex flex-col justify-between items-center outline-0 transition-all	`}
                >
                    <div>
                        <div className="paper px-9 font-medium text-xl flex justify-center">
                            <span>Dashboard</span>
                        </div>
                        <div className="text-[color:var(--primary)] pt-5">
                            {tabs.map((tab, index) => (
                                <div
                                    className="flex items-center my-4 cursor-pointer"
                                    key={index}
                                >
                                    <BiChevronRight
                                        size={25}
                                        className="text-slate-400"
                                    />
                                    <p
                                        onClick={() => router.push(tab.url)}
                                        key={index}
                                        className={` w-full py-2 px-6 ms-3 text-sm] ${
                                            usePathname() == tab.url
                                                ? "border-2 rounded-lg border-[color:var(--primary)]"
                                                : ""
                                        }`}
                                    >
                                        {tab.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-lg font-medium pb-2 cursor-pointer">
                        Log Out
                    </div>
                </div>
                <div className="md:ms-[300px] p-5">{children}</div>
            </body>
        </html>
    );
}
