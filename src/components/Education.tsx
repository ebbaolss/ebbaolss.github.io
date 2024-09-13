import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

interface ServiceCardProps {
  index: number;
  institution: string;
  icon: string;
  iconBg: string;
  degree: string;
  info: string;
  points: string[];
  type?: string;
  date: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  institution,
  icon,
  degree,
  info,
  type,
  date,
  iconBg,
}) => {
  return (
    <Tilt className=" mt-20 w-[50vw] mx-auto items-center">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 3)}
        className="w-full rounded-[20px] shadow-card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <div
          key={index}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <div
            className="w-16 h-16 my-5 rounded-full flex justify-center items-center"
            style={{ backgroundColor: `${iconBg}` }}
          >
            <img
              src={icon}
              alt={institution}
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
          <h3 className="text-secondary text-[20px] font-bold text-center">
            {degree}
          </h3>
          <h4 className="text-secondary my-2 text-[16px] font-semibold">
            {type}
          </h4>
          <h4 className="text-secondary text-[16px]">{date}</h4>
          <p className="my-3 text-secondary"> {info}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Education = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0)}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        whileInView="show"
        className="text-center"
      >
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      {education.map((degree, index) => (
        <motion.div className="mt-20">
          <ServiceCard
            index={index}
            institution={degree.institution}
            icon={degree.icon}
            iconBg={degree.iconBg}
            degree={degree.degree}
            info={degree.info}
            points={degree.points}
            type={degree.type}
            date={degree.date}
          />
        </motion.div>
      ))}
    </>
  );
};

export default SectionWrapper(Education, "education");
