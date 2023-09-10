import { styled } from "styled-components";
import HomeSvg from "../svg/heroicons/home.svg";
import StarSvg from "../svg/heroicons/StarOutline.svg";
import SettingsSvg from "../svg/heroicons/Settings.svg";
import { useRouter } from "next/router";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 3.6em;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #ff00aa;
`;

const Button = styled.button`
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
  const router = useRouter();

  function handleClickHomeButton() {
    router.push("/");
  }

  function handleClickFavoritesButton() {
    router.push("/favorites");
  }

  function handleClickSettingsButton() {
    router.push("/settings");
  }
  return (
    <NavBar>
      <Button onClick={handleClickHomeButton} type="button">
        <HomeImage />
      </Button>
      <Button onClick={handleClickFavoritesButton} type="button">
        <StarImage />
      </Button>
      <Button onClick={handleClickSettingsButton} type="button">
        <SettingsImage />
      </Button>
    </NavBar>
  );
}
