import { Tilt } from "react-tilt";
import { Link } from 'react-router-dom';
import blogPic from "./../assets/blog.png";
import chatAppPic from "./../assets/chatApp.jpg";
import EstorePic from "./../assets/Estore.jpg";
import annotator from "./../assets/annotator.png";
import storm from "./../assets/storm.png";
import sylva from "./../assets/sylva_logo_black.jpg"
import { CardType } from "@/types";

const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 3000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};



const Card = ({ img, title, description, id, stack, codeLink, demoLink }: CardType) => {
    return (
        <Tilt
            className="flex items-center justify-center"
            options={defaultOptions}
            style={{ height: 770, width: 530 }}
        >
            <div className="h-[85%] p-1 max-sm:w-[350px] md:w-[450px] shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-lg ">
                <div className="h-full relative flex flex-col items-center w-full bg-slate-900 rounded-xl">
                    <div className="w-full h-[40%] flex  items-center justify-center">
                        <img
                            alt={title}
                            src={img}
                            width={300}
                            className="w-full h-full rounded-sm  translate-y-[37x] "
                            height={200}
                        />
                    </div>
                    <div className="w-[20%] h-[3px] rounded-full mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 " />
                    <h2 className="text-2xl maxh-10 bg-gradient-to-r mt-2 font-bold text-center text-transparent from-violet-500 to-rose-400 bg-clip-text">
                        {title}
                    </h2>
                    <p className="ml-4 text-md maxh-20 b mt-6 text-left text-slate-200">
                        {description}
                    </p>
                    <div className="flex absolute bottom-10 flex-col mt-2 items-center ">
                        <h2 className="text-lg font-semibold mb-2 text-slate-200">Stack</h2>
                        <div className="flex mb-4 justify-between items-center gap-2">
                            {stack.map((s) => (
                                <span
                                    key={s}
                                    id={id}
                                    className="p-2 hover:bg-rose-400/40 cursor-pointer rounded-xl"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between gap-24 items-center">
                            <Link
                                to={codeLink}
                                className="p-2 pl-4 pr-4 hover:bg-indigo-700 brightness-110 bg-indigo-800 shadow-lg shadow-purple-800 hover:shadow-purple-600 text-slate-100 rounded-xl"
                            >
                                Code
                            </Link>
                            <Link
                                to={demoLink}
                                className="p-2 pl-4 pr-4 hover:bg-indigo-700 brightness-110 bg-indigo-800 shadow-lg shadow-purple-800 hover:shadow-purple-600 text-slate-100 rounded-xl"
                            >
                                Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

const Projects = () => {
    return (
        <>
            <div
                id="projects"
                className="w-full flex flex-col items-center justify-center mb-10 mt-20 ease-in duration-300 transition"
            >
                <div className="w-full h-16">
                    <h1 className="text-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-600 via-violet-700 to-purple-600 h-full text-transparent text-4xl font-sans font-bold bg-clip-text text-g">
                        Projects
                    </h1>
                </div>
                <div className="w-full mt-10 md:h-full flex justify-center items-center">
                    <div className="w-full grid max-md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-x-4 items-center">
                        <Card
                            img={storm}
                            id={'1'}
                            stack={["React", "Web Sockets", "NodeJs", "MongoDb"]}
                            title={"storm - A 2D graphic rendering app"}
                            description={
                                "This is an Digital pad project for 2D designing, drawing, illustrations. User can share the live screen, collaborate in real-time with multiple users, also save the designs."
                            }
                            codeLink={
                                "https://github.com/Soham508/storm"
                            }
                            demoLink={"https://storm-coral.vercel.app/"}
                        />
                        <Card
                            img={annotator}
                            id={'2'}
                            stack={["Chrome API", "React", "Typescript"]}
                            title={"Web annotator"}
                            description={
                                "A web browser extenstion to make annotations on web pages"
                            }
                            codeLink={"https://github.com/Soham508/Web-annotator"}
                            demoLink={""}
                        />

                        <Card
                            img={sylva}
                            id={'3'}
                            stack={["MongoDb", "Django", "React", "Firebase"]}
                            title={"Sylva"}
                            description={
                                `This is an Equity Portfolio Advisor app, where users can sign up/sign in using google accounts, create 
                                their risk porfiles and get an efficient portfolio based on their risk preferences and recent Indian equity markets data`
                            }
                            codeLink={"https://github.com/Soham508/sylva"}
                            demoLink={"https://sylva-jt4j.vercel.app/"}
                        />

                        <Card
                            img={chatAppPic}
                            id={'4'}
                            stack={["Socket.io", "HTML", "CSS"]}
                            title={"Raw chat app"}
                            description={
                                "This is an chat app that is purely written with html, css and javascript with web sockets technology. It does not store chat data, multiples users can join a single room for annonymous chat"
                            }
                            codeLink={"https://github.com/Soham508/RawStack-chat-app"}
                            demoLink={""}
                        />

                        <Card
                            img={blogPic}
                            id={'5'}
                            stack={["postgres", "Express", "React", "Firebase"]}
                            title={"Quill"}
                            description={
                                "This is a social media site app, users can create sign in/sign up create and edit profile, follow other users, get their lastest posts in feed, and create posts"
                            }
                            codeLink={"https://github.com/Soham508/BlogVista"}
                            demoLink={""}
                        />
                        <Card
                            img={EstorePic}
                            id={'6'}
                            stack={["MongoDb", "React", "NodeJs", "Express"]}
                            title={"Ecomerce app with admin panel"}
                            description={
                                "This is an ecommcerce platform project with admin panel, fully customizable content with features like payment gateway, wishlist, search bar, recommendations etc."
                            }
                            codeLink={
                                "https://github.com/Soham508/Ecommerce-app-with-admin-panel"
                            }
                            demoLink={""}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;