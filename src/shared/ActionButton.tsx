import AnchorLink from "react-anchor-link-smooth-scroll";

// Type
import { Pages } from "./types";

// Context
import { useSelected } from "../context/SelectPage";

interface Props {
  children: React.ReactNode;
}

interface Context {
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function ActionButton({ children }: Props) {
  const { setSelectedPage } = useSelected() as Context;

  return (
    <AnchorLink
      href={`${Pages.ContactUs}`}
      className="btn"
      onClick={() => setSelectedPage(Pages.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
