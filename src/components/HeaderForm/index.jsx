import React from "react";

import { Container } from "./styles";

const HeaderForm = () => {
  return (
    <Container>
      <div>
        <span className="logo">
          React<span className="logo emphasis ">in</span>
        </span>
        <span>change theme</span>
      </div>
    </Container>
  );
};

export default HeaderForm;
