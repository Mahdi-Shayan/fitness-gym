import { motion } from "framer-motion";

// Style
import "./home.scss";

// assets
import bg_txt from "../../assets/images/EvolveText.png";
import txt from "../../assets/images/HomePageText.png";
import homeIMG from "../../assets/images/HomePageGraphic.png";
import redbull from "../../assets/images/SponsorRedBull.png";
import ferbes from "../../assets/images/SponsorForbes.png";
import fortune from "../../assets/images/SponsorFortune.png";

// Shared
import ActionButton from "../../components/ActionButton";

// Context
import { useSelected } from "../../context/SelectPage";

// Type
import { Context, Pages } from "../../shared/types";

function Home() {
  const { setSelectedPage } = useSelected() as Context;

  return (
    <>
      <motion.section
        id="home"
        onViewportEnter={() => setSelectedPage(Pages.Home)}
      >
        {/* LEFT SIDE MOBILE AND DESKTOP */}
        <motion.div
          className="left-side"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="bg-text">
            <img src={bg_txt} />
          </div>
          <div className="side">
            <div className="name">
              <img src={txt} />
            </div>
            <div className="des">
              Unrivaled Gym, Unparalleled Training Fitness Classes. World
              Class Studios to get the Body Shapes That you Dream of.. Get
              Your Dream Body Now
            </div>
            <motion.div
              className="btn-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton>Jion Now</ActionButton>
              <ActionButton component="a">learn more</ActionButton>
            </motion.div>
          </div>
        </motion.div>
        <div className="right-side">
          <img src={homeIMG} />
        </div>
        {/* SPONSORS - DESKTOP  */}
        <div className="sponsors">
          <img src={redbull} alt="Red Bull-sponsors" />
          <img src={ferbes} alt="Ferbes-sponsors" />
          <img src={fortune} alt="Fortune-sponsors" />
        </div>
      </motion.section>
    </>
  );
}

export default Home;
