"use client";

import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from "./components/Skills";

export default function Home() {
  const [page, setPage] = useState("About");

  return (
    <div className="flex flex-col h-full gap-10 scroll-smooth w-full">
      <Navbar />

      <div className="relative mb-10 top-28 w-full h-auto flex items-center justify-center">
        <div className="flex flex-row w-auto bg-slate-100 gap-4 h-auto p-4 rounded-xl drop-shadow-xl ">
          <div
            className={`p-3 text-center rounded-xl bg-slate-100 cursor-pointer ${
              page == "About"
                ? "bg-slate-700 text-slate-100 outline-double outline-2 outline-slate-400 border-2 border-slate-300 ease-in duration-150 drop-shadow-xl"
                : ""
            }`}
            onClick={() => {
              setPage("About");
            }}
          >
            About
          </div>
          <div
            className={`p-3  text-center rounded-xl bg-slate-100 cursor-pointer  ${
              page == "Projects"
                ? "bg-slate-700 text-slate-100 outline-double outline-2 outline-slate-400 border-2 border-slate-300 ease-in duration-150 drop-shadow-xl"
                : ""
            }`}
            onClick={() => {
              setPage("Projects");
            }}
          >
            Projects
          </div>
          <div
            className={`p-3 text-center rounded-xl bg-slate-100 cursor-pointer  ${
              page == "Skills"
                ? "bg-slate-700 text-slate-100 outline-double outline-2 outline-slate-400 border-2 border-slate-300 ease-in duration-150 drop-shadow-xl"
                : ""
            }`}
            onClick={() => {
              setPage("Skills");
            }}
          >
            Skills
          </div>
          <div
            className={`p-3 text-center rounded-xl bg-slate-100 cursor-pointer  ${
              page == "Contact"
                ? "bg-slate-700 text-slate-100 outline-double outline-2 outline-slate-400 border-2 border-slate-300 ease-in duration-150 drop-shadow-xl"
                : ""
            }`}
            onClick={() => {
              setPage("Contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>

      {page == "About" && <About />}

      {page == "Projects" && <Projects />}

      {page == "Contact" && <Contact />}

      {page == "Skills" && <Skills />}
    </div>
  );
}
