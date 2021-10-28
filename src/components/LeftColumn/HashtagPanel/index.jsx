import Panel from "../../Panel";
import { Container, HashtagIcon } from "./styles";

const tags = ["provi", "proviWeek", "kenzie-academy", "react", "developer"];

const HashtagPanel = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Hashtags seguidas</span>

        {tags.map((item) => (
          <span className="tag" key={item}>
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;
