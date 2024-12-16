import { useState } from "react";
import { SketchPicker } from "react-color";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: cornflowerblue;
  padding: 100px 20px;

  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 50px;
  }
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con1 = styled.div`
  width: 45%;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  row-gap: 10px;
  /* width: 252px; */
  height: 500px;
  background-color: black;
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
  margin: 10px auto;
  /* position: absolute;
  bottom: 20%;
  left: 50%; */
  /* transform: translateX(-50%); */
`;

const ColorWrap = styled.div`
  width: 45%;

  h2 {
    margin-bottom: 10px;
  }
`;

const Colors = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 60px);
  grid-template-columns: repeat(2, 60px);
  gap: 20px;
`;

const ColorBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: red;
`;

const Color = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChangeComplete = (color) => {
    setColor(color.hex); // 선택한 색상을 저장
  };

  return (
    <Container>
      <h1>프레임을 선택해주세요</h1>
      <ConWrap>
        <Con1>
          <Con></Con>
          <Con></Con>
          <Con></Con>
          <Con></Con>
        </Con1>
        <ColorWrap>
          <h2>Theme Color</h2>
          <Colors>
            <ColorBtn></ColorBtn>
            <ColorBtn></ColorBtn>
            <ColorBtn></ColorBtn>
            <ColorBtn></ColorBtn>
          </Colors>
          <h2>Custom Color</h2>
          <div>
            <SketchPicker
              color={color}
              onChangeComplete={handleChangeComplete}
              styles={{
                default: {
                  picker: {
                    width: "90%", // 원하는 width 설정
                  },
                },
              }}
            />
            {/* <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: color,
              }}
            >
              배경색 미리보기
            </div> */}
          </div>
        </ColorWrap>
      </ConWrap>
      <Link to="/title">
        <NextBtn>다음으로</NextBtn>
      </Link>
    </Container>
  );
};

export default Color;
