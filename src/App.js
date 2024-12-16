import html2canvas from "html2canvas";
import { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const Frame = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 140px);
  row-gap: 10px;
  width: 252px;
  height: 756px;
  background-color: lightgray;
  padding: 10px;
  /* border: 10px solid black; */
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); */

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
  color: white;
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
  color: white;
`;

const App = () => {
  const data = {
    title: "우리들의 여행",
  };

  const [images, setImages] = useState([null, null, null, null]);
  const frameRef = useRef(null); // useRef 생성
  const today = new Date();
  // console.log(today);
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

  const [color, setColor] = useState("#ffffff");

  const handleChangeComplete = (color) => {
    setColor(color.hex); // 선택한 색상을 저장
  };

  return (
    <div>
      <h1>스토리컷 만들기</h1>
      <Frame ref={frameRef}>
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
        <TitleWrap>{data.title}</TitleWrap>
        <DateWrap>{today.toLocaleDateString()}</DateWrap>
      </Frame>
      <div>
        <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
          }}
        >
          배경색 미리보기
        </div>
      </div>
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
    </div>
  );
};

export default App;
