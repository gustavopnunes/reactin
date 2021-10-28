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
                <li key={topic.title}>
                  <span className="bullet" />
                  <span className="news">
                    <span className="head">{topic.title}</span>
                    <span className="subtext">
                      {topic.subtext ||
                        `${topic.time}d • ${topic.readers} leitores`}
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
