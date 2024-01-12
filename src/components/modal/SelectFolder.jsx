import styled from "styled-components";
import check from "../../assets/modal/check.svg";
import { useState } from "react";

export default function SelectFolder() {
  const [checkFolder, setCheckFolder] = useState(false);

  const handleFolderClick = (e) => {
    e.stopPropagation();
    setCheckFolder(!checkFolder);
  };
  return (
    <Wrapper>
      {/* 데이터 불러와서 map으로 표시 */}
      <Container $checkFolder={checkFolder} onClick={handleFolderClick}>
        <div className="folder-info">
          폴더이름
          <p>n개 링크</p>
        </div>
        {checkFolder ? <img src={check} alt="check-icon" /> : null}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  row-gap: 4px;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  padding: 8px;
  align-items: center;
  width: 100%;

  ${({ $checkFolder }) =>
    $checkFolder
      ? `border-radius: 8px;background: #f0f6ff;color: #6d6afe;`
      : `null`};

  &:hover {
    border-radius: 8px;
    background: #f0f6ff;
    color: #6d6afe;
  }

  .folder-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;
    font-size: 16px;
  }

  img {
    position: absolute;
    top: 13px;
    right: 8px;
  }
`;
