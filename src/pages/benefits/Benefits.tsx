import { motion } from "framer-motion";

// Style
import "./benefits.scss";

// Image
import benefitsGraphic from "../../assets/images/BenefitsPageGraphic.png";

// Icons
import { Groups, Villa, School } from "@mui/icons-material";

// Context
import { useSelected } from "../../context/SelectPage";

// Type
import { Context, Pages } from "../../shared/types";
import ActionButton from "../../components/ActionButton";

interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Array<BenefitsType> = [
  {
    icon: <Villa />,
    title: "State of the Art Fecilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <Groups />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <School />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

function Benefits() {
  const { setSelectedPage } = useSelected() as Context;

  return (
    <>
      <section id="benefits">
        <div className="benefits-title">
          <div className="title">
            <h2>MORE THAN JUST GYM.</h2>
          </div>
          <div className="des">
            We provide world class fitness equipment, trainers and classes
            to get you to your ultimate fitness goals with ease. We provide
            true care into each and every member.
          </div>
        </div>
        <motion.div
          className="benefits-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          onViewportEnter={() => setSelectedPage(Pages.Benefits)}
        >
          {benefits.map((benefit: BenefitsType, ind: number) => {
            return (
              <motion.div
                key={ind}
                className="benefit"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="icon">{benefit.icon}</div>
                <div className="header">
                  <h4>{benefit.title}</h4>
                </div>
                <div className="des">
                  <p>{benefit.description}</p>
                </div>
                <ActionButton component="a">learn more</ActionButton>
              </motion.div>
            );
          })}
        </motion.div>

        {/* PAGE GRAPHIC AND DESCRIPTION */}
        <div className="main-des">
          <div className="img">
            <img src={benefitsGraphic} alt="Benefits-graphic" />
          </div>
          <div className="content">
            <motion.div
              className="title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <motion.h2
                onViewportEnter={() => setSelectedPage(Pages.Benefits)}
              >
                MILLIONS OF HAPPY MEMBERS GETTING <span>FIT.</span>
              </motion.h2>
            </motion.div>
            <motion.div
              className="des"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>
                Nascetur aenean massa auctor tincidunt. Iaculis potenti
                amet egestas ultrices consectetur adipiscing ultricies
                enim. Pulvinar fames vitae vitae quis. Quis amet vulputate
                tincidunt at in nulla nec. Consequat sed facilisis dui sit
                egestas ultrices tellus. Ullamcorper arcu id pretium sapien
                proin integer nisl. Felis orci diam odio.
              </p>
              <p>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus
                vel est tellus quam porttitor. Mauris velit euismod
                elementum arcu neque facilisi. Amet semper tortor facilisis
                metus nibh. Rhoncus sit enim mattis odio in risus nunc.
              </p>
            </motion.div>
            <div className="btn-container">
              <ActionButton>Join Now</ActionButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
