import styled from "styled-components";
import Card from "./Card";

export default function Cards({ folderData }) {
  return (
    <Wrapper>
      {folderData && folderData.links
        ? folderData.links.map((link) => <Card key={link.id} link={link} />)
        : "저장된 링크가 없습니다"}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1060px;
  row-gap: 25px;
  column-gap: 20px;

  @media (max-width: 767px) {
    width: 325px;
    margin: 20px 32px 60px;
  }
  @media (max-width: 1124px) {
    width: 704px;
  }
`;
