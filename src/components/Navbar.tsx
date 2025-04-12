import logo from './../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
//import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";

const Navbar = () => {

    // const { scrollYProgress } = useScroll();
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [nav, setNav] = useState(true);
    const [mobile, setMobile] = useState(false)
    const navigate = useNavigate();

    const handleScroll = () => {

        setScrollPosition((prev) => {
            if (window.scrollY < prev) {
                setNav(true);
            }
            else if (window.scrollY > prev && window.scrollY > 150) {
                setNav(false);
            }
            return window.scrollY;
        });

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`sticky max-w-full top-0 z-10 mt-0 sm:m-6 h-28 flex flex-row justify-between items-center ${nav ? "" : "-translate-y-96"
                    } ${scrollPosition > 150 ? "drop-shadow-lg" : ""
                    }  rounded-lg bg-transparent transition-all duration-500 ease-in-out  `}
            >
                {" "}
                {/* Added sticky and background color */}
                <div
                    className={`w-1/4 h-16 rounded-lg ${scrollPosition > 100 ? "-translate-y-96" : ""
                        } items-center gap-x-0 flex flex-row`}
                >
                    <img
                        src={logo}
                        alt="Website Logo"
                        className="w-24 h-full object-cover rounded-xl"
                    />
                </div>
                {
                    //web navbar
                }
                <div className="w-3/4 max-sm:hidden h-full self-end flex flex-row  items-center ">
                    <div className="flex h-4/5 m-32 p-4 flex-row justify-center gap-x-6 rounded-lg ">
                        <Link
                            to="/"
                            className="relative hover:shadow-slate-100/30 flex w-24 cursor-pointer items-center justify-center  text-slate-100  font-semibold rounded-lg overflow-hidden hover-effect"
                        >
                            <span className="z-10">About</span>
                        </Link>

                        <Link
                            to="/skills"
                            className="relative hover:shadow-slate-100/30 flex w-24 cursor-pointer items-center justify-center  text-slate-100  font-semibold rounded-lg overflow-hidden hover-effect"
                        >
                            <span className="z-10">Skills</span>
                        </Link>

                        <Link
                            to="/projects"
                            className="relative hover:shadow-slate-100/30 flex w-24 cursor-pointer items-center justify-center  text-slate-100  font-semibold rounded-lg overflow-hidden hover-effect"
                        >
                            <span className="z-10">Projects</span>
                        </Link>

                        <Link
                            to="/contact"
                            className="relative hover:shadow-slate-100/30 flex w-24 cursor-pointer items-center justify-center  text-slate-100  font-semibold rounded-lg overflow-hidden hover-effect"
                        >
                            <span className="z-10">Contact</span>
                        </Link>

                        <div className="flex justify-center ml-4 items-center">
                            <a href="/resume.pdf" download="resume.pdf">
                                <div className="rounded-xl flex flex-row gap-4 shadow-lg bg-indigo-900 shadow-purple-800 hover:shadow-purple-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <RxDownload className="mt-0.5" size={20} /> Resume
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className=" flex flex-row max-lg:hidden gap-6 lg:right-4 ">
                        <a
                            href="https://www.linkedin.com/in/soham-ghige-869455252/"
                            className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="https://github.com/Soham508"
                            className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:sohamghige508@gmail.com"
                            className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
                        >
                            <AiOutlineMail />
                        </a>
                        <div className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaPhone />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setMobile((prev) => !prev);
                    }}
                    className="absolute right-4 sm:hidden cursor-pointer shadow-xl shadow-purple-900 rounded-xl bg-purple-900 p-3"
                >
                    <AiOutlineMenu size={25} />
                </div>
                {
                    //Mobile navbar
                }
                <div
                    className={
                        mobile
                            ? "sm:hidden fixed left-0 top-0 w-full h-screen bg-black/60"
                            : ""
                    }
                >
                    {/* Side Drawer Menu */}
                    <div
                        className={
                            mobile
                                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 p-10 ease-in duration-700"
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                        }
                    >
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Link to="/">
                                    <img
                                        className="rounded-xl"
                                        src={logo}
                                        width="87"
                                        height="35"
                                        alt="/"
                                    />
                                </Link>
                                <div
                                    onClick={() => {
                                        setMobile((prev) => !prev);
                                    }}
                                    className="rounded-full bg-violet-700 shadow-lg shadow-purple-800 p-3 cursor-pointer"
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">
                                    Let&#39;s build something legendary together
                                </p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Home
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        About
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Skills
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Projects
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Resume
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-slate-100">
                                    Let&#39;s Connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full bg-violet-700 shadow-xl shadow-purple-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>

                                    <div className="rounded-full bg-violet-700 shadow-xl shadow-purple-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <Link to="/#contact">
                                        <div className="rounded-full bg-violet-700 shadow-xl shadow-purple-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                    </Link>
                                    <Link to="/resume">
                                        <div
                                            onClick={() => setNav(!nav)}
                                            className="rounded-full bg-violet-700 shadow-xl shadow-purple-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                                        >
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar