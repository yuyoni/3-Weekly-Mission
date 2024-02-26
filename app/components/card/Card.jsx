import { useState } from "react";
import styled from "styled-components";
import emptyStar from "../../../public/assets/emptyStar.svg";
import filledStar from "../../../public/assets/filledStar.svg";
import kebab from "../../../public/assets/kebab.svg";
import noImage from "../../../public/assets/no-image.svg";
import formatDateAndDifference from "../../../utils/FormatDate";
import SelectMenu from "./SelectMenu";
import Image from "next/image";

export default function Card({ folderData, link }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isKebabClicked, setIsKebabClicked] = useState(false);

  const handleClickCard = () => {
    window.location.href = link.url;
  };

  const handleClickBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleClickKebab = (e) => {
    e.stopPropagation();
    setIsKebabClicked(true);
  };

  const { formattedDate, elapsedTime } = formatDateAndDifference(
    link.createdAt
  );

  return (
    <Wrapper className="card" onClick={handleClickCard}>
      <Thumbnail>
        <Image
          className="bookmark"
          src={isBookmarked ? filledStar : emptyStar}
          alt="bookmark-logo"
          onClick={handleClickBookmark}
          width="34px"
          height="34px"
        />
        <img
          className="link-img"
          src={link.imageSource}
          alt={link.title}
          onError={(e) => {
            e.currentTarget.src = noImage.src;
          }}
        />
      </Thumbnail>
      <Detail>
        <Image
          className="kebab"
          src={kebab}
          alt="kebab-icon"
          onClick={handleClickKebab}
          width="34px"
          height="34px"
        />

        <span className="elapsed-time">{elapsedTime}</span>
        <p className="description">{link.description}</p>
        <span className="formatted-data">
          {formattedDate.replace(/-/g, ". ")}
        </span>
      </Detail>
      {isKebabClicked ? (
        <SelectMenu
          setIsKebabClicked={setIsKebabClicked}
          linkUrl={link.url}
          folderData={folderData}
        />
      ) : null}
    </Wrapper>
  );
}

const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  .link-img {
    max-width: 120%;
    max-height: 100%;
  }
`;

const Detail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  gap: 10px;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  .description {
    margin: 0;
    font-size: 16px;
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .elapsed-time {
    color: #666;
    font-size: 13px;
  }

  .formatted-data {
    color: #333;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  & :hover ~ ${Detail} {
    background-color: #f0f6ff;
  }
  & :hover .link-img {
    transition: all 0.3s;
    transform: scale(1.3);
  }

  .bookmark {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;
    cursor: pointer;
  }

  .kebab {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }
`;
