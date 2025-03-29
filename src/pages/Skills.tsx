import mongo from "./../assets/mongo.png";
import firebase from "./../assets/firebase.png";
import github from "./../assets/github.png";
import nextjs from "./../assets/nextjs.png";
import node from "./../assets/node.png";
import react from "./../assets/react.png";
import tailwind from "./../assets/tailwind.png";
import typescript from "./../assets/typescript.png";
import redis from "./../assets/redis.png";
import linux from "./../assets/linux.jpeg";

const Skills = () => {
    return (
        <div id="skills" className="w-full relative lg:h-screen ">
            <div className="max-w-[1240px] mx-auto flex flex-col mt-20 h-full">
                <p className="text-2xl font-semibold tracking-widest uppercase text-purple-600">
                    Skills
                </p>
                <h2 className="py-4 text-lg ">What I Can Do</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={typescript} width={100} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={react} width={100} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={tailwind} width={100} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto bg-slate-100">
                                <img src={firebase} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={github} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={nextjs} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={node} width={94} height={84} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>express js</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={mongo} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>mongodb</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={linux} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Linux</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg max-h-28 shadow-purple-800 hover:shadow-purple-600 bg-indigo-950 rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <img src={redis} width={104} height={64} alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Redis</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;