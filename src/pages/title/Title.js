import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
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

const TitleWrap = styled.div`
  width: 90%;
  margin: 50px auto;

  h2 {
    font-size: 20px;
  }
`;

const TitleInput = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  padding: 5px;
`;

const NextBtn = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  margin: 10px auto;
`;

const Title = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNext = () => {
    if (title.trim()) {
      localStorage.setItem("storyTitle", title);
      navigate("/upload");
    } else {
      alert("제목을 입력해주세요!");
    }
  };
  return (
    <Container>
      <BackButton onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </BackButton>
      <h1>여러분의 스토리에 제목을 적어주세요!</h1>

      <TitleWrap>
        <h2>타이틀</h2>
        <TitleInput
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={handleInputChange}
        ></TitleInput>
      </TitleWrap>

      <NextBtn onClick={handleNext}>다음으로</NextBtn>
    </Container>
  );
};

export default Title;
