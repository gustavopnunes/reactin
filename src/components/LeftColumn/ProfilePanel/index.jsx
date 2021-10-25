import { useContext } from "react";
import { DataContext } from "../../../providers/DataContext";

import Panel from "../../Panel";

import { Container } from "./styles";

const ProfilePanel = () => {
  const { userData } = useContext(DataContext);
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src={userData.avatarUrl}
          alt="Avatar"
          className="profile-picture"
        />
        <h1>
          {userData.firstName} {userData.lastName}
        </h1>
        <h2>
          {userData.job} @ {userData.company}
        </h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">{Math.floor(Math.random() * 100)}</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">{Math.floor(Math.random() * 100)}</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
