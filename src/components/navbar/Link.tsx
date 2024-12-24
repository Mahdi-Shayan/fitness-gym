import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../../shared/types";

interface Props {
  page: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().split(" ").join("") as Pages;

  return (
    <>
      <AnchorLink
        href={`#${lowerCasePage}`}
        className={lowerCasePage === selectedPage ? "link active" : "link"}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </>
  );
}

export default Link;
