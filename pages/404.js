import styled from "styled-components";
import Link from "next/link";
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
`;

const HomeButton = styled.button`
  display: flex;
  padding: 0 10px;
  align-items: center;
  border-radius: 4px;
  background-color: black;
  color: #fff;
  height: 40px;
  border: none;
  margin-top: 10px;
`;
const Header = () => {
  return (
    <StyledHeader>
      404-ERROR 잘못된 요청입니다
      <Link href="/">
        <HomeButton>홈으로</HomeButton>
      </Link>
    </StyledHeader>
  );
};

export default Header;
