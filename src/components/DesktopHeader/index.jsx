import { useState } from "react";
import { useAuth } from "../../providers/AuthContext";
import { useData } from "../../providers/DataContext";
import ThemeSwitcher from "../ThemeSwitcher";

import {
  Container,
  Wrapper,
  LinkedinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from "./styles";

const DesktopHeader = () => {
  const {
    userData: { avatarUrl },
  } = useData();

  const { handleLogout } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>
        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificaçoes</span>
            </button>
            <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <ProfileCircle src={avatarUrl} />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
            {menuIsOpen && (
              <span className="user-nav" onClick={handleLogout}>
                Sair
              </span>
            )}
            <ThemeSwitcher />
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
