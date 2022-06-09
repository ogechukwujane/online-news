import {
  BackArrowWrap,
  Container,
  ContentWrap,
  Header,
  Logo,
  NavBar,
  NewsWrap,
  PageNumber,
  Pagination,
  RightArrowWrap,
} from "./style";
import { useEffect, useMemo } from "react";
import { NewsCard } from "./component/newsCard";
import newsApi from "../../api/newsApi";
import { APIKEY } from "../../api/newsApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addNews, getAllNews } from "../../store/newsSlice";
import { ReactComponent as BackArrow } from "../../assets/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";
import { useState } from "react";
import { useCallback } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(getAllNews);

  const [pageNumber, setPageNumber] = useState(1);
  const newsPerPage = 6;

  const TotalNumberOfPages = Math.floor(
    (newsList?.articles?.length ?? 0) / newsPerPage
  );

  const PageList = useMemo(() => {
    let arr = [];
    const num = Math.floor(pageNumber / 4);
    for (let i = 4 * num; i < 4 + 4 * num; i++) {
      if (i > TotalNumberOfPages) break;
      if (i === 0) continue;
      arr.push(i);
    }
    return arr;
  }, [pageNumber, TotalNumberOfPages]);

  const renderItem = useCallback(
    (pageItem, index) => (
      <PageNumber
        key={index}
        isActive={pageNumber === pageItem}
        onClick={() => setPageNumber(pageItem)}
      >
        {pageItem}
      </PageNumber>
    ),
    [pageNumber, setPageNumber]
  );

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsApi.get(
          `/top-headlines?country=ng&category=general&apiKey=${APIKEY}`
        );
        dispatch(addNews(response.data));
      } catch (err) {
        console.log("Err: ", err);
      }
    };
    fetchNews();
  }, []);

  return (
    <Container>
      <NavBar>
        <Logo>NewsOnline</Logo>
      </NavBar>
      <ContentWrap>
        <Header>Latest news</Header>
        <NewsWrap>
          {newsList?.articles
            ?.slice(
              0 + (pageNumber - 1) * newsPerPage,
              newsPerPage * pageNumber
            )
            .map((news, index) => (
              <NewsCard key={index} data={news} />
            ))}
        </NewsWrap>
        <Pagination>
          {pageNumber !== 1 ? (
            <BackArrowWrap onClick={() => setPageNumber((prev) => prev - 1)}>
              <BackArrow />
              <BackArrow />
            </BackArrowWrap>
          ) : (
            <BackArrowWrap fade>
              <BackArrow />
              <BackArrow />
            </BackArrowWrap>
          )}
          {PageList.map(renderItem)}

          {/* <PageNumber>{pageNumber}</PageNumber> */}
          {pageNumber === TotalNumberOfPages ? (
            <RightArrowWrap fade>
              <RightArrow />
              <RightArrow />
            </RightArrowWrap>
          ) : (
            <RightArrowWrap onClick={() => setPageNumber((prev) => prev + 1)}>
              <RightArrow />
              <RightArrow />
            </RightArrowWrap>
          )}
        </Pagination>
      </ContentWrap>
    </Container>
  );
};
