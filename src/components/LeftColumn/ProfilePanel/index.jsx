import { useState } from "react";
import { useData } from "../../../providers/DataContext";
import { Container } from "./styles";
import Panel from "../../Panel";

const ProfilePanel = () => {
  const { userData } = useData();
  const [randomNumbers] = useState([
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ]);
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
          <span className="value">{randomNumbers[0]}</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">{randomNumbers[1]}</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
