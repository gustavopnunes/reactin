import { api } from "../api";
import { createContext, useEffect, useState, useContext } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import faker from "faker";

faker.locale = "pt_BR";

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
    api.defaults.headers.Authorization = `Bearer ${token.slice(1, -1)}`;
    api.get(`/users/${userId}`).then((response) => {
      setUserData(response.data);
      response.data.firstLogin && setModalIsOpen(true);
    });
  };

  const patchUserData = (data) => {
    const token = localStorage.getItem("@ReactIn/token");
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    api
      .patch(`/users/${userData.id}`, data)
      .then(() => {
        window.location.reload();
      })
      .catch(() => toast.error("Algo deu errado ao atualizar seus dados :("));
  };

  const url = "https://dummyapi.io/data/v1/post?limit=5&page=";

  useEffect(() => {
    setIsLoadingFeed(true);
    axios
      .get(`${url}${currentPage}`, {
        headers: {
          "app-id": "617b08a0bdaa71cf38cf6d72",
        },
      })
      .then((response) => {
        let data = response.data.data;
        let modifiedPosts = [];
        for (let i = 0; i < data.length; i++) {
          const newPost = {
            ...data[i],
            time: Math.floor(Math.random() * 7 + 1),
            author: {
              job: faker.name.jobTitle(),
              company: faker.company.companyName(),
            },
          };
          modifiedPosts.push(newPost);
        }
        setPosts([...posts, ...modifiedPosts]);
        setIsLoading(false);
        setTrending(modifiedPosts.slice(0, 5));
        return [response.data.articles];
      })
      .catch((error) => toast.error("Algo deu errado ao carregar o feed :("));
    // eslint-disable-next-line
  }, [currentPage]);

  const changePostReactions = (reaction, postId) => {
    if (reaction === "increment") {
      posts.forEach((post) => {
        if (post.id === postId) {
          post.likes += 1;
        }
      });
    }
    if (reaction === "decrement") {
      posts.forEach((post) => {
        if (post.id === postId) {
          post.likes -= 1;
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
