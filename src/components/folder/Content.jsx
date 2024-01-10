import styled from "styled-components";
import useFetchData from "../../hooks/useFetchData";
import convertKeyToCamelCase from "../../utils/convertKeyToCamelCase";
import Card from "../card/Card";

export default function Content({ folderId }) {
  const linkData = useFetchData(`users/1/links?folderId=${folderId}`)?.data;

  return (
    <Wrapper>
      {linkData
        ? linkData.map((link) => {
            const newLink = convertKeyToCamelCase(link);
            return <Card key={newLink.id} link={newLink} />;
          })
        : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 1060px;
  row-gap: 25px;
  column-gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    width: 325px;
    margin: 20px 32px 60px;
  }
  @media (max-width: 1124px) {
    width: 704px;
  }
`;
