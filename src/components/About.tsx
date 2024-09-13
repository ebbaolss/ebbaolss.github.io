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
  url: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon,
  url,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Tilt className="xs:w-[200px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 3)}
          className="w-full h-[50px] p-1 rounded-[20px] shadow-card"
        >
          <div
            key={index}
            className="bg-tertiary rounded-[5px] py-3 px-12 min-h-[50px] flex justify-evenly items-center w-full h-full"
          >
            <img src={icon} alt={title} className="w-25 h-25 object-contain" />
          </div>
        </motion.div>
      </Tilt>
    </a>
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
          👋 Hei, og velkommen til min portefølje! Jeg heter Ebba, er 23 år
          gammel og studerer siste året på en master i informatikk med
          spesialisering i programmering og systemarkitektur ved Universitetet i
          Oslo. Jeg har en stor interesse for apputvikling, gode løsninger og ny
          teknologi. Med denne nettsiden utforsker jeg mer frontend-utvikling.{" "}
          <br />
          Sjekk ut prosjektene mine nedenfor for å få et innblikk i mine
          ferdigheter og erfaringer.
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
      <div className="mt-20 flex justify-end gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
