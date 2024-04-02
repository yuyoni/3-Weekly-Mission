import styles from "./CommonModal.module.css";
import Image from "next/image";
import SelectFolder from "./SelectFolder";
import IconBox from "./IconBox";
import close from "@public/images/_close.svg";
import { FolderData, FolderId, Id } from "type";
import { useState } from "react";

type ModalProps = {
  isModalShow: boolean;
  setter: (arg: boolean) => void;
  title: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  color?: string;
  folders?: FolderData[] | null;
  icon?: boolean;
  folderId?: FolderId;
  userId?: Id;
  handleClickButton?: (value: string | Id) => void;
  isPending?: boolean;
};

export default function CommonModal({
  isModalShow,
  setter,
  title,
  subtitle = "",
  placeholder,
  buttonText,
  color,
  folders,
  icon,
  folderId,
  userId,
  handleClickButton,
  isPending,
}: ModalProps) {
  const [inputValue, setInputValue] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<Id | null>(null);

  const buttonColor =
    color === "linear-gradient" ? styles.gradient : styles.red;

  const handleFolderSelect = (folderId: Id) => {
    setSelectedFolderId(folderId);
  };

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      setter(false);
    }
  };

  return (
    isModalShow && (
      <div
        className={styles.wrapper}
        onClick={(e) => {
          e.stopPropagation();
          handleClickOutside(e);
        }}
      >
        <div className={styles.container}>
          <Image
            src={close}
            className={styles.exit_button}
            alt="x"
            onClick={(e) => {
              e.stopPropagation();
              setter(false);
            }}
            width={24}
            height={24}
            priority
          />
          <span className={styles.title}>{title}</span>
          {placeholder && (
            <input
              className={styles.input}
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
          <p className={styles.subtitle}>{subtitle}</p>
          {folders && (
            <SelectFolder
              folders={folders}
              onFolderSelect={handleFolderSelect}
            />
          )}
          {handleClickButton && (
            <button
              className={`${styles.button} ${buttonColor}`}
              onClick={() => {
                handleClickButton(folders ? selectedFolderId : inputValue);
                setInputValue("");
              }}
              disabled={
                (folders && !selectedFolderId) ||
                (!folders && placeholder && !inputValue) ||
                isPending
              }
            >
              {buttonText}
            </button>
          )}
          {icon && userId && folderId && (
            <IconBox
              userId={userId}
              folderId={folderId}
              folderName={subtitle}
            />
          )}
        </div>
      </div>
    )
  );
}
