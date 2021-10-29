import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel = ({ title, topics }) => {
  return (
    <Container>
      <Panel>
        <span className="title">{title}</span>
        <ul>
          {topics &&
            topics.map((topic) => {
              return (
                <li key={topic.text}>
                  <span className="bullet" />
                  <span className="news">
                    <span className="head">{topic.text}</span>
                    <span className="subtext">
                      {topic.subtext ||
                        `${topic.time}d • ${topic.likes} leitores`}
                    </span>
                  </span>
                </li>
              );
            })}
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
