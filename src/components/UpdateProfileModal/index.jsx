import ReactModal from "react-modal";
import { useState } from "react";
import { useData } from "../../providers/DataContext";
import axios from "axios";

function UpdateProfileModal() {
  const [isChangingImg, setIsChangingImg] = useState(false);
  const [isUploadingImg, setIsUploadingImg] = useState(false);
  const [uploadedImg, setUploadedImg] = useState("");
  const [newUserData, setNewUserData] = useState({});

  const { userData, patchUserData, modalIsOpen } = useData();

  const updateUserData = (e) => {
    e.preventDefault();
    const data = { ...userData, ...newUserData, firstLogin: false };
    patchUserData(data);
  };

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
        setNewUserData({ ...newUserData, avatarUrl: resp.data.url });
        setUploadedImg(resp.data.url);
        setIsUploadingImg(false);
        setIsChangingImg(false);
      });
  };

  return (
    <ReactModal className="Modal" isOpen={modalIsOpen} ariaHideApp={false}>
      <form onSubmit={(e) => updateUserData(e)}>
        <h1>Complete seu cadastro!</h1>
        <p>
          Para obter a melhor experiência do ReactIn, você deverá completar seu
          perfil
        </p>
        <img src={uploadedImg || userData.avatarUrl} alt="user avatar" />
        <label htmlFor="img-upload" onClick={() => setIsChangingImg(true)}>
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
  );
}

export default UpdateProfileModal;
