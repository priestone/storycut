import { faAngleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* background-color: cornflowerblue; */
  background-color: #f8f0e5;
  padding: 100px 20px;
  position: relative;

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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 20px;
`;

const Con1 = styled.div`
  width: 45%;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  row-gap: 10px;
  height: 500px;
  background-color: ${(props) => props.bgColor || "black"};
  padding: 10px;
`;

const Con = styled.div`
  background-color: #d9d9d9;
`;

const NextBtn = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  margin: 50px auto 0 auto;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
`;

const ColorWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  h2 {
    margin-bottom: 10px;
  }
`;

const CustomBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 227, 68, 1) 0%,
    rgba(255, 143, 143, 1) 100%
  );
`;

const Colors = styled.div`
  /* display: grid;
  grid-template-rows: repeat(2, 60px);
  grid-template-columns: repeat(2, 60px);
  gap: 20px;
  margin-bottom: 50px; */
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ColorBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const Color = () => {
  const [bgColor, setBgColor] = useState("black"); // Con1 배경색 상태
  const [customColor, setCustomColor] = useState("#ffffff"); // ChromePicker 색상 상태
  const [showPicker, setShowPicker] = useState(false); // ChromePicker 표시 상태
  const navigate = useNavigate();

  const handleColorClick = (color) => {
    setBgColor(color); // 선택된 색상을 Con1 배경색으로 설정
    localStorage.setItem("frameColor", color); // 로컬스토리지에 저장
  };

  const handleChangeComplete = (color) => {
    setCustomColor(color.hex); // ChromePicker로 선택한 색상 업데이트
    setBgColor(color.hex); // Con1 배경색도 업데이트
    localStorage.setItem("frameColor", color.hex); // 로컬스토리지에 저장
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Helmet>
        <title>스토리컷_색상선택</title>
      </Helmet>
      <BackButton onClick={handleBack}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </BackButton>
      <h1>프레임의 색상을 선택해주세요</h1>
      <ConWrap>
        <Con1 bgColor={bgColor}>
          <Con></Con>
          <Con></Con>
          <Con></Con>
          <Con></Con>
        </Con1>
      </ConWrap>
      <h2>Theme Color</h2>
      <ColorWrap>
        <Colors>
          <ColorBtn color="black" onClick={() => handleColorClick("black")} />
          <ColorBtn
            color="#EF8A9C"
            onClick={() => handleColorClick("#EF8A9C")}
          />
          <ColorBtn
            color="#6C89AB"
            onClick={() => handleColorClick("#6C89AB")}
          />
          <ColorBtn
            color="#897E78"
            onClick={() => handleColorClick("#897E78")}
          />
          <CustomBtn onClick={() => setShowPicker(true)} />
        </Colors>
        {showPicker && (
          <>
            <Overlay onClick={() => setShowPicker(false)} />
            <Popup>
              <ChromePicker
                color={customColor}
                onChangeComplete={handleChangeComplete}
                styles={{
                  default: {
                    picker: {
                      width: "300px",
                    },
                  },
                }}
              />
            </Popup>
          </>
        )}
        {/* <div>
          <ChromePicker
            color={customColor}
            onChangeComplete={handleChangeComplete}
            styles={{
              default: {
                picker: {
                  width: "100%", // 원하는 width 설정
                },
              },
            }}
          />
        </div> */}
      </ColorWrap>
      <Link to="/title">
        <NextBtn>다음으로</NextBtn>
      </Link>
    </Container>
  );
};

export default Color;
