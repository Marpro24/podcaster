import { Link } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <Link to={"/"}>Podcaster</Link>
    </HeaderStyled>
  );
};

export default Header;
