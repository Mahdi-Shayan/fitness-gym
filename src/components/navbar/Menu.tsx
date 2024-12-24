import Link from "./Link";

// Type
import { Pages } from "../../shared/types";

// Context
import { useSelected } from "../../context/SelectPage";

interface Context {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function Menu() {
  const { selectedPage, setSelectedPage } = useSelected() as Context;

  return (
    <ul>
      <li>
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </li>
      <li>
        <Link
          page="Benefits"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </li>
      <li>
        <Link
          page="Our Classes"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </li>
      <li>
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </li>
    </ul>
  );
}

export default Menu;
