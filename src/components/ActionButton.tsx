import AnchorLink from "react-anchor-link-smooth-scroll";

// Type
import { Pages } from "../shared/types";

// Context
import { useSelected } from "../context/SelectPage";

interface Props {
  children: React.ReactNode;
  component?: 'btn' | 'a' | undefined
}

interface Context {
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function ActionButton({ children, component }: Props) {
  const { setSelectedPage } = useSelected() as Context;

  return (
    <AnchorLink
      href={`#${Pages.ContactUs}`}
      className={component ?? 'btn'}
      offset={95}
      onClick={() => setSelectedPage(Pages.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
