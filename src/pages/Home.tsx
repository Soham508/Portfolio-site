import { motion } from "framer-motion";
import { useState } from "react";
import developerPic from "./../assets/developer.png"
import { fadeIn } from "@/lib/utils";

const Home = () => {

    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);

    return (
        <>
            <div
                id="about"
                className="w-full justify-center mt-20 p-2 flex items-center ease-in duration-300"
            >
                <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <motion.div className=""
                            variants={fadeIn("right", 0.05)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <p className="uppercase text-2xl font-semibold tracking-widest text-purple-600">
                                About
                            </p>
                            <h2 className="py-4">Who I Am</h2>

                            <p className="py-2 text-slate-100">
                                I am a passionate full-stack developer with expertise in building responsive and dynamic web applications. My skill set includes modern technologies like React, TypeScript, Node.js, and Django, along with experience in database management using MongoDB and PostgreSQL. I am also proficient in cloud services like Firebase and AWS, enabling me to create scalable and efficient solutions.
                            </p>
                            <p className="py-2 text-slate-100">
                                My portfolio showcases a variety of projects, including a collaborative 2D graphic rendering app, a web annotator browser extension, and an equity portfolio advisor application. These projects highlight my ability to integrate real-time features, authentication, and data visualization into user-friendly interfaces.
                            </p>
                            <p className="py-2 text-slate-100">
                                I am always eager to learn new technologies and take on challenging projects. My goal is to deliver high-quality software solutions that meet user needs and exceed expectations.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div className=""
                        variants={fadeIn("left", 0.05)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.9 }}
                    >
                        <div
                            onMouseMove={(e) => {
                                setX(e.pageX / 200);
                                setY(e.pageY / 280);
                                console.log(x, y);
                            }}
                            className={`w-0.8 h-auto -translate-x-[15px] md:h-max md:translate-y-20 m-4 pt-2 pb-2 shadow-lg shadow-purple-900 hover:shadow-purple-800 hover:shadow-2xl rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 ml-10`}
                        >
                            <img src={developerPic} height={110} width={350} alt="/" id="IMG" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home