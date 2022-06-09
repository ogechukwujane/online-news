import styled from "styled-components";
import { ReactComponent as Star } from "../../../assets/news_star.svg";

export const NewsCard = ({ data }) => {
  let today = new Date(data.publishedAt);

  return (
    <Container>
      <Topic>{data.title}</Topic>
      <Content>{data.content}</Content>
      <Row>
        <FlexBox>
          <FullStory>Read full story</FullStory>
          <BookMark>
            <Star />
            Add to bookmarks
          </BookMark>
        </FlexBox>
        <Time>{`${today.toLocaleTimeString()}`}</Time>
      </Row>
    </Container>
  );
};
const Container = styled.div`
  width: calc(33.33% - 27px);
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(165, 165, 165, 0.15);
  border-radius: 5px;
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 425px) {
    width: calc(100%);
  }
`;
const Topic = styled.p`
  height: 70px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  border-bottom: 1px solid #cccccc;
  padding: 15px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
const Content = styled.p`
  height: 100px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #747373;
  padding: 15px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media (max-width: 1024px) {
    column-gap: 15px;
  }
`;
export const FullStory = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #4b48ff;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
export const BookMark = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #747373;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    font-size: 10px;
    svg {
      margin-right: 5px;
      width: 12px;
    }
  }
`;
export const Time = styled(BookMark)`
  color: #7d7d81;
`;
