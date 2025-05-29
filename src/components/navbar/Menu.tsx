import Link from "./Link";

// Type
import { Context } from "../../shared/types";

// Context
import { useSelected } from "../../context/SelectPage";

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
