import { Container } from "./styles.js";

const AdBanner = () => {
  return (
    <Container className="ad-banner">
      <span>
        <a
          href="https://provi.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Provi
        </a>
      </span>{" "}
      - Transforme a sua carreira hoje!
    </Container>
  );
};

export default AdBanner;
