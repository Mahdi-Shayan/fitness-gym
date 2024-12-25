import * as yup from "yup";

const name_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,15}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Required"),
  name: yup
    .string()
    .matches(
      name_REGEX,
      "User name must be 4 character at least and 15 maximum"
    )
    .required("Required"),
});
