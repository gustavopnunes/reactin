import { Container } from "./styles";
import ThemeSwitcher from "../ThemeSwitcher";

const FormHeader = () => {
  return (
    <Container>
      <div>
        <span className="logo">
          React<span className="logo highlight ">in</span>
        </span>
        <span>
          <ThemeSwitcher />
        </span>
      </div>
    </Container>
  );
};

export default FormHeader;
