import { styled } from "styled-components";
import HomeSvg from "../svg/heroicons/home.svg";
import StarSvg from "../svg/heroicons/StarOutline.svg";
import SettingsSvg from "../svg/heroicons/Settings.svg";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 10%;
`;

const Button = styled.button`
  type: button;
  width: 33%;
  height: 100%;
`;

const HomeImage = styled(HomeSvg)``;

const StarImage = styled(StarSvg)``;

const SettingsImage = styled(SettingsSvg)``;

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
