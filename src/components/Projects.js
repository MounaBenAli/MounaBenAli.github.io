import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-10 py-16 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        {projects.map((project) => (
          <div key={project.image} className="mb-10">
            <h1 className="text-xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <h2 className="text-lg text-green-400 mb-2 ">
              {project.subtitle}
            </h2>
            <div className="">
              <p className="text-gray-400">{project.description}</p>
              <button className="mx-auto px-4 py-2 font-bold text-white bg-green-400 rounded-full mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </button>
            </div>
            <div className="">
              <div className="mt-8 flex justify-center">
                <img
                  alt="gallery"
                  className="object-center"
                  src={project.image}
                  height="400"
                  width="300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
