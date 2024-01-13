import { useState } from "react";
import styled from "styled-components";
import check from "../../assets/modal/check.svg";

export default function SelectFolder({ folderData }) {
  const [checkedFolders, setCheckedFolders] = useState({});

  const handleFolderClick = (e, folderId) => {
    e.stopPropagation();
    setCheckedFolders((prevCheckedFolders) => ({
      ...prevCheckedFolders,
      [folderId]: !prevCheckedFolders[folderId],
    }));
  };

  return (
    <Wrapper>
      {folderData.map((folder) => {
        return (
          <Container
            key={folder.id}
            $checkFolder={checkedFolders[folder.id]}
            onClick={(e) => handleFolderClick(e, folder.id)}
          >
            <div className="folder-info">
              {folder.name}
              <p>{folder.link.count}개 링크</p>
            </div>
            {checkedFolders[folder.id] ? (
              <img src={check} alt="check-icon" />
            ) : null}
          </Container>
        );
      })}
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
  cursor: pointer;

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
    top: 12px;
    right: 8px;
  }
`;
