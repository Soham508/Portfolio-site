import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdContact } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/utils';

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <motion.div className=""
                    variants={fadeIn("up", 0.05)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* left */}
                        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg bg-indigo-950/50 shadow-purple-800 rounded-xl p-4">
                            <div className="lg:p-4 h-full ">
                                <div>
                                    <IoMdContact color='indigo' className='-ml-2 h-20 w-20 shadow-lg' />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold tracking-widest uppercase text-purple-600">
                                        Soham
                                    </h2>
                                    <p>Full Stack Developer</p>
                                    <p className="py-4">
                                        I am available for developing full stack application with
                                        modern technologies.
                                    </p>
                                </div>
                                <div>
                                    <p className="uppercase pt-8">Connect With Me</p>
                                    <div className="flex items-center justify-between py-4">
                                        <a
                                            href="https://www.linkedin.com/in/soham-ghige-869455252/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <FaLinkedinIn />
                                            </div>
                                        </a>
                                        <a
                                            href="https://github.com/Soham508"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <FaGithub />
                                            </div>
                                        </a>

                                        <div className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                            <AiOutlineMail />
                                        </div>
                                        <Link to="/resume">
                                            <div className="rounded-full shadow-lg  shadow-purple-800 hover:shadow-purple-500 bg-indigo-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                                <BsFillPersonLinesFill />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="col-span-3 bg-indigo-950/50 w-full h-auto shadow-lg shadow-purple-800 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form
                                    action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                                    method="POST"
                                    encType="multipart/form-data"
                                >
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input
                                                className="border-2 p-3 bg-slate-900 focus:shadow-purple-800 focus:border-purple-800 shadow-lg flex border-purple-800 rounded-xl "
                                                type="text"
                                                name="name"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">
                                                Phone Number
                                            </label>
                                            <input
                                                className="border-2 p-3 bg-slate-900 focus:shadow-purple-800 focus:border-purple-800 shadow-lg flex border-purple-800 rounded-xl "
                                                type="number"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Email</label>
                                        <input
                                            className="border-2 p-3 bg-slate-900 focus:shadow-purple-800 focus:border-purple-800 shadow-lg flex border-purple-800 rounded-xl "
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Subject</label>
                                        <input
                                            className="border-2 p-3 bg-slate-900 focus:shadow-purple-800 focus:border-purple-800 shadow-lg flex border-purple-800 rounded-xl "
                                            type="text"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Message</label>
                                        <textarea
                                            className="border-2 bg-slate-900 focus:shadow-purple-800 focus:border-purple-800 shadow-lg p-3 border-purple-800 rounded-xl "
                                            rows={10}
                                            name="message"
                                        ></textarea>
                                    </div>
                                    <div className='w-full flex items-center justify-center'>

                                        <button className="w-auto p-4 rounded-xl shadow-md hover:scale-105 shadow-purple-800 hover:shadow-purple-600/80 bg-indigo-900  ease-in duration-300">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="flex justify-center py-12">
                    <Link to="/contact">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;