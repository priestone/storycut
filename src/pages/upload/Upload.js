import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import { useState, useRef, useEffect } from "react";
// import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: cornflowerblue;
  position: relative;
  padding: 100px 20px;
  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 140px);
  row-gap: 10px;
  width: 252px;
  height: 756px;
  /* background-color: lightgray; */
  background-color: ${(props) =>
    props.bgColor || "lightgray"}; /* 동적 배경색 */
  padding: 10px;
  margin: 0 auto;

  .frame-item {
    height: 140px;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    /* height: 140px; */
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: white; */
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  /* color: white; */
  color: ${(props) => (props.isLight ? "black" : "white")}; /* 글자색 조건 */
`;

const UploadButtonWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Sample = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #999;
`;

const DateWrap = styled.div`
  text-align: end;
  /* color: white; */
  color: ${(props) => (props.isLight ? "black" : "white")}; /* 글자색 조건 */
`;

const Upload = () => {
  const [title, setTitle] = useState(""); // 저장된 제목 상태
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("#ffffff"); // 프레임 배경색

  const [images, setImages] = useState([null, null, null, null]);
  const frameRef = useRef(null); // useRef 생성
  const today = new Date();

  console.log(today.toLocaleDateString()); // 예: "2024. 12. 16." (한국 기준)

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // 여러 파일 업로드
    const newImages = [...images];

    // 업로드된 파일을 순서대로 프레임에 채움
    files.forEach((file, index) => {
      if (index < 4) {
        newImages[index] = URL.createObjectURL(file);
      }
    });

    setImages(newImages.slice(0, 4)); // 최대 4개로 제한
  };

  const handleDownload = () => {
    if (frameRef.current) {
      html2canvas(frameRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "storycut.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  useEffect(() => {
    const savedTitle = localStorage.getItem("storyTitle");
    const savedColor = localStorage.getItem("frameColor");
    if (savedTitle) setTitle(savedTitle);
    if (savedColor) setBgColor(savedColor);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const isLightBackground = bgColor === "#ffffff" || bgColor === "white";

  return (
    <Container>
      <BackButton onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </BackButton>
      <h1>스토리컷 만들기</h1>
      <Frame ref={frameRef} bgColor={bgColor}>
        {images.map((src, index) => (
          <div key={index} className="frame-item">
            {/* {src ? <img src={src} alt={`uploaded-${index}`} /> : "사진 추가"} */}
            {src ? (
              <img src={src} alt={`uploaded-${index}`} />
            ) : (
              <Sample>사진추가</Sample>
            )}
          </div>
        ))}
        <TitleWrap isLight={isLightBackground}>{title}</TitleWrap>
        <DateWrap isLight={isLightBackground}>
          {today.toLocaleDateString()}
        </DateWrap>
      </Frame>
      <UploadButtonWrap>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="upload-input"
        />
        <label htmlFor="upload-input">
          <button
            onClick={() => document.getElementById("upload-input").click()}
          >
            사진 업로드
          </button>
        </label>
      </UploadButtonWrap>
      <UploadButtonWrap>
        <button onClick={handleDownload}>다운로드</button>
      </UploadButtonWrap>
    </Container>
  );
};

export default Upload;
