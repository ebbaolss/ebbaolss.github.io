import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

interface ExperienceProps {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  description: string;
  points: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  description,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "tertiary", color: "tertiary" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[120%] h-[100%] object-cover rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-secondary text-[24px] font-bold">{title}</h3>
        <h4 className="text-secondary text-[16px] font-semibold">
          {company_name}
        </h4>
        <h4 className="text-secondary text-sm text-lg mt-1 ">{date}</h4>
        <p className="text-secondary mt-3">{description}</p>
        <ul className="mt-5 list-disc list-inside">
          {points.map((point, index) => (
            <li
              key={index}
              className="text-secondary text-[14px] pl-1 tracking-wider pt-2"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        viewport={{ once: true, amount: 1 }}
        whileInView="show"
        className="text-center"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#CCC5B9">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
