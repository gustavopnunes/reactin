import { useContext } from "react";
import { DataContext } from "../../providers/DataContext";
import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader = () => {
  const {
    userData: { avatarUrl },
    userData: { firstName },
  } = useContext(DataContext);
  return (
    <Container>
      <ProfileCircle src={avatarUrl} alt={`Avatar do usuário ${firstName}`} />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
