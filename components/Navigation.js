import { styled } from "styled-components";
import HomeSvg from "../svg/heroicons/home.svg";
import StarSvg from "../svg/heroicons/StarOutline.svg";
import SettingsSvg from "../svg/heroicons/Settings.svg";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
`;

const Button = styled.button`
  type: button;
  height: 100%;
  width: 30%;
  border: none;
`;

const HomeImage = styled(HomeSvg)`
  width: 3em;
`;

const StarImage = styled(StarSvg)`
  width: 3em;
`;

const SettingsImage = styled(SettingsSvg)`
  width: 3em;
`;

export default function Navigation() {
  return (
    <NavBar>
      <Button>
        <HomeImage />
      </Button>
      <Button>
        <StarImage />
      </Button>
      <Button>
        <SettingsImage />
      </Button>
    </NavBar>
  );
}
