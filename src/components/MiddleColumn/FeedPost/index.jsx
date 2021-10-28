import { useState } from "react";
import Panel from "../../Panel";
import { useData } from "../../../providers/DataContext";
import { BiLike } from "react-icons/bi";
import { FaHandsWash } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

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
  const { posts, changePostReactions } = useData();
  const [incrementingReaction, setIncrementingReaction] = useState(false);

  const handleReactions = (postId) => {
    const reaction = incrementingReaction ? "decrement" : "increment";
    setIncrementingReaction(!incrementingReaction);
    changePostReactions(reaction, postId);
  };
  return (
    <Panel>
      {posts &&
        posts.map((post) => {
          return (
            <Container key={post.text}>
              <Row className="heading">
                <Avatar
                  src={post.owner.picture}
                  alt={`avatar de ${post.owner.firstName}`}
                />
                <Column>
                  <h3>
                    {post.owner.firstName} {post.owner.lastName}
                  </h3>
                  <h4>
                    {post.author.job} @ {post.author.company}
                  </h4>
                  <time>{post.time}d</time>
                </Column>
              </Row>
              <PostImage
                src={post.image || "https://placeimg.com/640/480/tech"}
                alt={post.text}
                height="320px"
                width="400px"
              />
              <PostContent>
                <div>
                  <h1>{post.text}</h1>
                </div>
              </PostContent>
              <Row className="likes">
                <span
                  className="circle blue"
                  onClick={() => handleReactions(post.id)}
                >
                  <BiLike />
                </span>
                <span
                  className="circle green"
                  onClick={() => handleReactions(post.id)}
                >
                  <FaHandsWash />
                </span>
                <span
                  className="circle red"
                  onClick={() => handleReactions(post.id)}
                >
                  <FiHeart />
                </span>
                <span className="number">{post.likes}</span>
              </Row>
              <Row>
                <Separator />
              </Row>
              <Row className="actions">
                <button>
                  <LikeIcon onClick={() => handleReactions(post.id)} />
                  <span onClick={() => handleReactions(post.id)}>Gostei</span>
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
