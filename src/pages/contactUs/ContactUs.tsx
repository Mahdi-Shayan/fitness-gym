import { motion } from "framer-motion";
import { useFormik } from "formik";

//  Image
import contactUsIMG from "../../assets/images/ContactUsPageGraphic.png";

// Style
import "./contactUs.scss";

// Context
import { useSelected } from "../../context/SelectPage";

// Type
import { Context, Pages } from "../../shared/types";
import { schema } from "../../shared/schema";
import { useState } from "react";

interface FromTypes {
  name: string;
  email: string;
  message: string;
}

const headerMotion = {
  hidden: { Opacity: 0, x: -50 },
  visible: { Opacity: 1, x: 0 },
};

function ContactUs() {
  const { setSelectedPage } = useSelected() as Context;
  const [open, setOpen] = useState<boolean>(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<FromTypes>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (value, action) => {
      alert(`Name: ${value.name} \n Email: ${value.email}` )
      action.resetForm();
    },
  });
  const { name, email, message } = values;

  return (
    <>
      <motion.section
        id="contactus"
        onViewportEnter={() => setSelectedPage(Pages.ContactUs)}
      >
        <div className="left-side">
          <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={headerMotion}
          >
            <h2>
              JOIN NOW <span>TO GET IN SHAPE</span>
            </h2>
          </motion.div>
          <motion.div
            className="des"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={headerMotion}
          >
            <p>
              Congue adipiscing risus commodo placerat. Tellus et in
              feugiat nisl sapien vel rhoncus. Placerat at in enim
              pellentesque. Nulla adipiscing leo egestas nisi elit risus
              sit. Nunc cursus sagittis.
            </p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className={errors.name && touched.name ? "err-input" : ""}
                type="text"
                name="name"
                placeholder="NAME"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className="err-txt">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                className={
                  errors.email && touched.email ? "err-input" : ""
                }
                type="email"
                name="email"
                placeholder="EMAIL"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="err-txt">{errors.email}</p>
              )}
            </div>
            <textarea
              rows={7}
              name="message"
              placeholder="MESSAGE"
              value={message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className="submit" type="submit">
              SUBMIT
            </button>
          </motion.form>
        </div>
        <div className="right-side">
          <img src={contactUsIMG} />
        </div>
      </motion.section>
    </>
  );
}

export default ContactUs;
