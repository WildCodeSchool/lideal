import React from "react";
import "./picture.scss";
import iconePhoto from "../assets/iconePictureBlack.svg";

function Picture() {
  const handleOpenCamera = () => {
    // ouvre la caméra en demandant les droits d'accès au navigateur
    if (!cameraPopup || !stream) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((newStream) => {
          setStream(newStream);

          if (videoRef.current) {
            // réinitialise le flux vidéo
            videoRef.current.srcObject = null;
            videoRef.current.srcObject = newStream;
          }
        })
        .catch((error) => {
          console.error(
            "Erreur lors de l'ouverture de l'appareil photo :",
            error
          );
        });
    }
  };
  const handleCloseCamera = () => {
    // coupe la camera
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
    }
  };
  return (
    <div className="picture-container bg-black">
      <div className="picture">
        <div className="btn-autorisation">
          <button type="button" onClick={handleOpenCamera}>
            Ouvrir camera
          </button>
        </div>
      </div>
      <div className="logo-picture">
        <img src={iconePhoto} alt="iconePhoto" />
      </div>
    </div>
  );
}

export default Picture;
