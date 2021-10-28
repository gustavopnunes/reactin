import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";
import { Container } from "./styles";
import LoadingFeedShare from "../Shimmer/LoadingFeedShare";
import LoadingFeedPost from "../Shimmer/LoadingFeedPost";

const MiddleColumn = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          <LoadingFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
