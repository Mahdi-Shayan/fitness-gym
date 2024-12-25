import { motion } from "framer-motion";

// Images
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import { useSelected } from "../../context/SelectPage";

// Type
import { Context, Pages } from "../../shared/types";

// Style
import "./ourClasses.scss";

interface ClassType {
  name: string;
  description?: string;
  image: string;
}

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

function OurClasses() {
  const { setSelectedPage } = useSelected() as Context;

  return (
    <>
      <motion.section
        id="ourclasses"
        onViewportEnter={() => {
          setSelectedPage(Pages.OurClasses);
        }}
      >
        <motion.div
          className="header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="title">
            <h2>OUR CLASSES</h2>
          </div>
          <div className="des">
            <p>
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel
              est tellus quam porttitor. Mauris velit euismod elementum
              arcu neque facilisi. Amet semper tortor facilisis metus nibh.
              Rhoncus sit enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="classes">
          {classes.map((c: ClassType, ind: number) => {
            return (
              <div key={ind} className="class">
                <img src={c.image} alt={c.name} />
                <div className="content">
                  <div className="name">
                    <h3>{c.name}</h3>
                  </div>
                  <div className="des">
                    <p>{c.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </>
  );
}

export default OurClasses;
