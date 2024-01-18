import React, { useState, useRef } from "react";
import "./picture.scss";
import iconePhoto from "../assets/iconePictureBlack.svg";

function Picture() {
  const [camera, setCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showOpenCameraButton, setShowOpenCameraButton] = useState(true);
  const [showCancelButton, setShowCancelButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleOpenCamera = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(newStream);

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }

      setCamera(true);
      setShowOpenCameraButton(false);
      setShowCancelButton(true); // Affiche le bouton "Annuler" lorsque la caméra est ouverte
      setShowVideo(true);
    } catch (error) {
      console.error("Erreur lors de l'ouverture de l'appareil photo :", error);
    }
  };

  const handleCloseCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setStream(null);
      // setCamera(false);
      // setShowOpenCameraButton(true);
      // setShowCancelButton(false);
      //  setShowVideo(false);
      // setPreview(null);
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);

      const photoDataUrl = canvas.toDataURL("image/png");
      setPreview(photoDataUrl);
      handleCloseCamera();
    }
  };

  return (
    <div className="picture-container bg-black">
      <div className="picture">
        <div className="btn-autorisation">
          {showOpenCameraButton && (
            <button type="button" onClick={handleOpenCamera}>
              Ouvrir camera
            </button>
          )}
        </div>
        {preview && (
          <div className="photo-preview">
            <img src={preview} alt="Photo Preview" />
            {showCancelButton && (
              <button type="button" onClick={handleCloseCamera}>
                Annuler
              </button>
            )}
          </div>
        )}
        <video className={showVideo ? "active" : ""} ref={videoRef} autoPlay />
      </div>
      <div className="logo-picture">
        {camera && (
          <img src={iconePhoto} alt="iconePhoto" onClick={handleCapturePhoto} />
        )}
      </div>
      {!preview && (
        <button type="button" onClick={handleCloseCamera}>
          Fermer camera
        </button>
      )}
    </div>
  );
}

export default Picture;
