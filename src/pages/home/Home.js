import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  /* background-color: cornflowerblue; */
  background: url("/imgs/homebg.png") no-repeat center center;

  h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 50px;
    transform: translate(-50%, -50%);
  }
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
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>스토리컷_홈</title>
      </Helmet>
      {/* <h1>스토리컷</h1> */}
      <Link to="/color">
        <StartBtn>시작하기</StartBtn>
      </Link>
    </Container>
  );
};

export default Home;
