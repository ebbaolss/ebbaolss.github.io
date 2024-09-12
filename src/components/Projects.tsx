//import React from 'react'
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

interface ProjectProps {
  index: number;
  name: string;
  date: string;
  description: string;
  points: string[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  index,
  name,
  date,
  description,
  points,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[400px] bg-tertiary rounded-lg shadow-lg overflow-hidden"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 300,
        }}
        className="w-full"
      >
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative w-full h-[250px] overflow-hidden rounded-t-lg bg-white p-2 border border-gray-200">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <h4 className="text-secondary text-lg mt-1">{date}</h4>
            <p className="text-secondary mt-2">{description}</p>
            <ul className="mt-4 list-disc list-inside text-white">
              {points.map((point, index) => (
                <li key={index} className="text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        viewport={{ once: true, amount: 1 }}
        whileInView="show"
        className="text-center"
      >
        <p className={styles.sectionSubText}>Tech Projects Overview</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hi! Here is an overview of my projects, hope you like them :D
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
