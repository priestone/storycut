import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: cornflowerblue;
`;

const StartBtn = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const Home = () => {
  return (
    <Container>
      홈입니다
      <Link to="/color">
        <StartBtn>시작하기</StartBtn>
      </Link>
    </Container>
  );
};

export default Home;
