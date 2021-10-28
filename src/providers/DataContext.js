import { api } from "../api";
import { createContext, useEffect, useState, useContext } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import faker from "faker";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

  const getUserData = (token) => {
    const userId = jwtDecode(token).sub;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.get(`/users/${userId}`).then((response) => {
      setUserData(response.data);
      response.data.firstLogin && setModalIsOpen(true);
    });
  };

  const patchUserData = (data) => {
    const token = localStorage.getItem("@ReactIn/token");
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    api.patch(`/users/${userData.id}`, data).then(() => {
      window.location.reload();
    });
  };

  const url =
    "https://newsapi.org/v2/top-headlines?category=technology&country=br&apiKey=3ff3b1588eea4b9c867d35ace51a1baa&pageSize=5&page=";

  useEffect(() => {
    setIsLoadingFeed(true);
    axios
      .get(`${url}${currentPage}`)
      .then((response) => {
        let data = response.data.articles;
        let modifiedPosts = [];
        for (let i = 0; i < data.length; i++) {
          const newPost = {
            ...data[i],
            readers: Math.floor(Math.random() * 1000),
            time: Math.floor(Math.random() * 7 + 1),
            author: {
              name: faker.name.findName(),
              job: faker.name.jobTitle(),
              company: faker.company.companyName(),
              avatarUrl: faker.internet.avatar(),
            },
            reactions: Math.floor(Math.random() * 1000),
          };
          modifiedPosts.push(newPost);
        }
        setPosts([...posts, ...modifiedPosts]);
        setIsLoading(false);
        setTrending(modifiedPosts.slice(0, 5));
        return [response.data.articles];
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [currentPage]);

  const changePostReactions = (reaction, postTitle) => {
    if (reaction === "increment") {
      posts.forEach((post) => {
        if (post.title === postTitle) {
          post.reactions += 1;
        }
      });
    }
    if (reaction === "decrement") {
      posts.forEach((post) => {
        if (post.title === postTitle) {
          post.reactions -= 1;
        }
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        getUserData,
        userData,
        patchUserData,
        posts,
        trending,
        setCurrentPage,
        isLoading,
        isLoadingFeed,
        changePostReactions,
        modalIsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataProvider;
