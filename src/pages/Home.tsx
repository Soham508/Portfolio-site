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
                                I specialize in building mobile responsive front-end UI applications
                                that connect with API’s and other backend technologies. I’m
                                passionate about learning new technologies and understand there is
                                more than one way to accomplish a task. Though I am most proficient
                                in building front-end applications using HTML, CSS, Javascript, and
                                React, I am a quick learner and can pick up new tech stacks as
                                needed. I believe that being a great developer is not using one
                                specific language, but choosing the best tool for the job.
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