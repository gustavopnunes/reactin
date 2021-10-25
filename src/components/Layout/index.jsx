import React, { useState } from "react";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import { Container } from "./styles";
import AdBanner from "../AdBanner";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import { useContext } from "react";
import { DataContext } from "../../providers/DataContext";
import ReactModal from "react-modal";
import axios from "axios";
import { useEffect } from "react";

const Layout = () => {
  const [isChangingImg, setIsChangingImg] = useState(false);
  const [isUploadingImg, setIsUploadingImg] = useState(false);
  const [uploadedImg, setUploadedImg] = useState("");
  const [newUserData, setNewUserData] = useState({});
  const { modalIsOpen } = useContext(DataContext);

  const { userData, isLoading, isLoadingFeed, setCurrentPage } =
    useContext(DataContext);

  const uploadImg = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "capstone");
    setIsUploadingImg(true);
    axios
      .post(
        "https://api.cloudinary.com/v1_1/gustavopnunes/image/upload",
        formData
      )
      .then((resp) => {
        setNewUserData({ ...newUserData, imageUrl: resp.data.url });
        setUploadedImg(resp.data.url);
        setIsUploadingImg(false);
        setIsChangingImg(false);
      });
  };

  const updateUserData = (e) => {
    // e.preventDefault();
    // const data = { ...userData, ...newUserData, firstLogin: false };
    // patchUserData(data);
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinel"));

    return () => intersectionObserver.disconnect();
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>

      <div id="sentinel">
        {isLoadingFeed && <img src="/images/loading.gif" alt="loading" />}
      </div>

      <ReactModal className="Modal" isOpen={modalIsOpen}>
        <form onSubmit={(e) => updateUserData(e)}>
          <h1>Complete seu cadastro!</h1>
          <img src={uploadedImg || userData.avatarUrl} alt="user avatar" />
          <label for="img-upload" onClick={() => setIsChangingImg(true)}>
            {isUploadingImg ? "Salvando..." : "Alterar foto"}
          </label>
          {isChangingImg && (
            <div className="img-upload">
              <input
                type="file"
                id="img-upload"
                onChange={(file) => uploadImg(file.target.files[0])}
              />
            </div>
          )}

          <input
            type="text"
            placeholder="Nome"
            onChange={(e) =>
              setNewUserData({ ...newUserData, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Sobrenome"
            onChange={(e) =>
              setNewUserData({ ...newUserData, lasttName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Profissão"
            onChange={(e) =>
              setNewUserData({ ...newUserData, job: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Empresa"
            onChange={(e) =>
              setNewUserData({ ...newUserData, company: e.target.value })
            }
          />
          <button type="submit">SALVAR</button>
        </form>
      </ReactModal>
    </Container>
  );
};

export default Layout;
