import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const NavBar = styled.div`
  background: #03009e;
  padding: 20px 40px;
  @media (max-width: 375px) {
    padding: 20px;
  }
`;
export const ContentWrap = styled.div`
  margin: 30px 40px 15px 40px;
  @media (max-width: 375px) {
    margin: 20px;
  }
`;
export const Logo = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
`;
export const Header = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #03009e;
  padding-bottom: 15px;
`;
export const NewsWrap = styled.div`
  width: 100%;
  border-top: 2px solid #c4c4c4;
  display: flex;
  column-gap: 40px;
  row-gap: 40px;
  flex-wrap: wrap;
  padding-top: 40px;
`;
export const Pagination = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: flex-end;
  margin: 30px 0px;
`;
export const BackArrowWrap = styled.div`
  width: 10px;
  height: 25px;
  cursor: pointer;
  opacity: ${(props) => (props.fade ? 0.1 : 1)};
  svg {
    fill: black;
  }
`;
export const RightArrowWrap = styled(BackArrowWrap)``;
export const PageNumber = styled.p`
  width: 15px;
  height: 15px;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  padding: 5px;
  background: ${(props) => (props.isActive ? "#03009e" : "#7d7d81;")};
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  /* background: #7d7d81; ; */
`;
