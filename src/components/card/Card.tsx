import putData from "@apis/putData";
import useClickOutside from "@hooks/useClickOutside";
import emptyStar from "@public/images/empty_star.svg";
import filledStar from "@public/images/filled_star.svg";
import kebab from "@public/images/kebab.svg";
import noImage from "@public/images/no_image.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import formatDateAndDifference from "@utils/formatDate";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FolderData, LinkList } from "type";
import styles from "./Card.module.css";
import SelectMenu from "./SelectMenu";

type CardProps = {
  key: number;
  folders: FolderData[] | undefined;
  link: LinkList;
};

export default function Card({ folders, link }: CardProps) {
  const router = useRouter();
  const selectMenuRef = useRef<HTMLDivElement | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(link.favorite);
  const [isKebabClicked, setIsKebabClicked] = useState(false);

  const queryClient = useQueryClient();

  const { formattedDate, elapsedTime } = link
    ? formatDateAndDifference(link.created_at)
    : { formattedDate: "", elapsedTime: "" };

  const { mutate } = useMutation<
    any,
    AxiosError,
    {
      favorite: boolean;
    }
  >({
    mutationFn: (requestData) =>
      putData({ endpoint: `/links/${link.id}`, requestData }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      setIsBookmarked(!isBookmarked);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClickCard = () => {
    if (link) {
      router.push(`https://${link.url}`);
    }
  };

  const handleClickKebab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isOpen: boolean
  ) => {
    e.stopPropagation();
    setIsKebabClicked(isOpen);
  };

  const setKebabMenuStatus = (status: boolean) => {
    setIsKebabClicked(status);
  };

  const toggleBookmark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    mutate({
      favorite: !isBookmarked,
    });
  };

  useClickOutside(selectMenuRef, setKebabMenuStatus);

  return (
    <div className={styles.card} onClick={handleClickCard}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.bookmark}
          src={isBookmarked ? filledStar : emptyStar}
          alt="bookmark-logo"
          onClick={toggleBookmark}
          width={34}
          height={34}
        />
        <img
          className={styles.link_img}
          src={link?.image_source || noImage.src}
          alt={link ? link.title : ""}
          onError={(e) => {
            e.currentTarget.src = noImage.src;
          }}
        />
      </div>
      <div className={styles.detail}>
        <Image
          className={styles.kebab}
          src={kebab}
          alt="kebab-icon"
          onClick={(e) => {
            handleClickKebab(e, true);
          }}
          width={21}
          height={17}
        />

        <span className={styles.elapsed_time}>{elapsedTime}</span>
        <p className={styles.description}>{link ? link.description : ""}</p>
        <span className={styles.formatted_data}>
          {formattedDate.replace(/-/g, ". ")}
        </span>
      </div>
      <SelectMenu
        isKebabClicked={isKebabClicked}
        selectMenuRef={selectMenuRef}
        link={link}
        folders={folders}
      />
    </div>
  );
}
