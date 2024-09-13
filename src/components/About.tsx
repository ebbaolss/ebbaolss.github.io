import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 3)}
        className="w-full p-[3px] rounded-[20px] shadow-card"
      >
        <div
          key={index}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#454441] text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div className="my-10" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div className="flex gap-20">
        <motion.p
          variants={fadeIn("right", "", 0, 0.5)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          👋 Hi! My name is Ebba, im 23 years old and currently studing the 5th
          year of my masters in Informatics: Programming and System Architecture
          at the University of Oslo.
        </motion.p>
        <Tilt className="xs:w-[250px] w-full">
          <motion.img
            src={profile}
            variants={fadeIn("left", "spring", 0.1, 1)}
            alt="Profile"
            className="w-full max-w-xs h-auto rounded-full object-cover border-white-200 shadow-lg"
          />
        </Tilt>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
