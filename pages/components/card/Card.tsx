import noImage from "@public/images/no-image.svg";
import formatDateAndDifference from "@utils/formatDate";
import Image from "next/image";
import { useState } from "react";
import styles from "./Card.module.css";
import SelectMenu from "./SelectMenu";

type Props = { key: number; folders: FolderData[]; link: LinkList };

export default function Card({ folders, link }: Props) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isKebabClicked, setIsKebabClicked] = useState(false);

  const handleClickCard = () => {
    window.location.href = link.url;
  };

  const handleClickBookmark = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleClickKebab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isOpen: boolean
  ) => {
    e.stopPropagation();
    setIsKebabClicked(isOpen);
  };

  const { formattedDate, elapsedTime } = formatDateAndDifference(
    link.createdAt
  );

  return (
    <div className={styles.card} onClick={handleClickCard}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.bookmark}
          src={isBookmarked ? "images/filledStar.svg" : "images/emptyStar.svg"}
          alt="bookmark-logo"
          onClick={handleClickBookmark}
          width={34}
          height={34}
        />
        <img
          className={styles.link_img}
          src={link.imageSource}
          alt={link.title}
          onError={(e) => {
            e.currentTarget.src = noImage.src;
          }}
        />
      </div>
      <div className={styles.detail}>
        <Image
          className={styles.kebab}
          src="images/kebab.svg"
          alt="kebab-icon"
          onClick={(e) => {
            handleClickKebab(e, true);
          }}
          width={21}
          height={17}
        />

        <span className={styles.elapsed_time}>{elapsedTime}</span>
        <p className={styles.description}>{link.description}</p>
        <span className={styles.formatted_data}>
          {formattedDate.replace(/-/g, ". ")}
        </span>
      </div>
      {isKebabClicked ? (
        <SelectMenu
          handleClickKebab={handleClickKebab}
          linkUrl={link.url}
          folders={folders}
        />
      ) : null}
    </div>
  );
}