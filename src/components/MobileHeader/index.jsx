import { useState } from "react";
import { useData } from "../../providers/DataContext";
import { useAuth } from "../../providers/AuthContext";
import ThemeSwitcher from "../ThemeSwitcher";
import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader = () => {
  const { handleLogout } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const {
    userData: { avatarUrl },
    userData: { firstName },
  } = useData();
  return (
    <Container>
      <ProfileCircle
        src={avatarUrl}
        alt={`Avatar do usuário ${firstName}`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
      {menuIsOpen && (
        <span className="user-nav" onClick={handleLogout}>
          Sair
        </span>
      )}

      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
      <ThemeSwitcher />
    </Container>
  );
};

export default MobileHeader;
