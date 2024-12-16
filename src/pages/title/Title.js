import styled from "styled-components";

const Container = styled.div`
  max-width: 440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: cornflowerblue;

  h1 {
    text-align: center;
    font-size: 20px;
  }
`;

const TitleWrap = styled.div`
  width: 250px;
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

const Title = () => {
  return (
    <Container>
      <h1>여러분의 스토리에 제목을 적어주세요!</h1>

      <TitleWrap>
        <h2>타이틀</h2>
        <TitleInput placeholder="제목을 입력해주세요"></TitleInput>
      </TitleWrap>
    </Container>
  );
};

export default Title;
