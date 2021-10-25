import { useContext } from "react";

import Panel from "../../Panel";
import { DataContext } from "../../../providers/DataContext";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
  PostContent,
} from "./styles";

const FeedPost = () => {
  const { posts } = useContext(DataContext);

  return (
    posts &&
    posts.map((post) => {
      return (
        <Panel>
          <Container>
            <Row className="heading">
              <Avatar src={post.author.imageUrl} alt={post.author.name} />
              <Column>
                <h3>{post.author.name}</h3>
                <h4>
                  {post.author.job} @ {post.author.company}
                </h4>
                <time>{post.time}d</time>
              </Column>
            </Row>
            <PostImage
              src={post.imageUrl}
              alt={post.tile}
              height="320px"
              width="400px"
            />
            <PostContent>
              <div>
                <h1>{post.title}</h1>
              </div>
            </PostContent>
            <Row className="likes">
              <span className="circle blue" />
              <span className="circle green" />
              <span className="circle red" />
              <span className="number">49</span>
            </Row>
            <Row>
              <Separator />
            </Row>
            <Row className="actions">
              <button>
                <LikeIcon />
                <span>Gostei</span>
              </button>
              <button>
                <CommentIcon />
                <span>Comentar</span>
              </button>
              <button>
                <ShareIcon />
                <span>Compartilhar</span>
              </button>
              <button>
                <SendIcon />
                <span>Enviar</span>
              </button>
            </Row>
          </Container>
        </Panel>
      );
    })
  );
};

export default FeedPost;
