import { useState } from "react";
import Panel from "../../Panel";
import { useData } from "../../../providers/DataContext";
import { BiLike } from "react-icons/bi";
import { FaHandsWash } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import faker from "faker";

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

faker.locale = "pt_BR";

const FeedPost = () => {
  const { posts, changePostReactions } = useData();
  const [incrementingReaction, setIncrementingReaction] = useState(false);

  const handleReactions = (postTitle) => {
    const reaction = incrementingReaction ? "decrement" : "increment";
    setIncrementingReaction(!incrementingReaction);
    changePostReactions(reaction, postTitle);
  };
  return (
    <Panel>
      {posts &&
        posts.map((post) => {
          return (
            <Container key={post.title}>
              <Row className="heading">
                <Avatar
                  src={post.author.avatarUrl}
                  alt={`avatar de ${post.author.name}`}
                />
                <Column>
                  <h3>{post.author.name}</h3>
                  <h4>
                    {post.author.job} @ {post.author.company}
                  </h4>
                  <time>4d</time>
                </Column>
              </Row>
              <PostImage
                src={post.urlToImage}
                alt={post.title}
                height="320px"
                width="400px"
              />
              <PostContent>
                <div>
                  <h1>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h1>
                </div>
              </PostContent>
              <Row
                className="likes"
                onClick={() => handleReactions(post.title)}
              >
                <span className="circle blue">
                  <BiLike />
                </span>
                <span className="circle green">
                  <FaHandsWash />
                </span>
                <span className="circle red">
                  <FiHeart />
                </span>
                <span className="number">{post.reactions}</span>
              </Row>
              <Row>
                <Separator />
              </Row>
              <Row className="actions">
                <button>
                  <LikeIcon />
                  <span onClick={() => handleReactions(post.title)}>
                    Gostei
                  </span>
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
              <Separator />
            </Container>
          );
        })}
    </Panel>
  );
};

export default FeedPost;
