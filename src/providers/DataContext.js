import { api } from "../api";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

  const getUserData = (token) => {
    const userId = jwtDecode(token).sub;
    api.get(`/users/${userId}`).then((response) => {
      setUserData(response.data);
      response.data.firstLogin && setModalIsOpen(true);
    });
  };

  useEffect(() => {
    console.log("entrei");
    getPosts();
    // eslint-disable-next-line
  }, [currentPage]);

  const getPosts = (page) => {
    setIsLoadingFeed(true);
    api
      .get(`/posts?_page=${page}&_limit=7`)
      .then((response) => {
        console.log(response.data);
        setPosts([...posts, ...response.data]);
        setIsLoading(false);
      })
      .then(() => {
        setIsLoadingFeed(false);
      })
      .catch((error) => console.log(error));
  };

  console.log(posts);

  return (
    <DataContext.Provider
      value={{
        getUserData,
        userData,
        posts,
        setCurrentPage,
        isLoading,
        isLoadingFeed,
        modalIsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
