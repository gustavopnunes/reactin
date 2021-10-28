import LoadingTrendingPanel from "../Shimmer/LoadingTrendingPanel";
import TrendingPanel from "./TrendingPanel";
import { Container } from "./styles";
import { useData } from "../../providers/DataContext";

const RightColumn = ({ isLoading }) => {
  const { trending } = useData();
  const courses = [
    {
      text: "Fundamentos da Contabilidade",
      subtext: "Kay Stice e Jim Stice",
    },
    {
      text: "Introdução à Ciência de Dados",
      subtext: "Doug Rose",
    },
    {
      text: "Construindo Confiança",
      subtext: "Brenda Bailey",
    },
  ];

  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel title="Assuntos mais discutidos" topics={trending} />
          <TrendingPanel title="Cursos mais populares" topics={courses} />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
