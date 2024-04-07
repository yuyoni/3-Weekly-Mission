import close from "@public/images/_close.svg";
import Image from "next/image";
import { useState } from "react";
import { FolderData } from "type";
import styles from "./CommonModal.module.css";
import IconBox from "./IconBox";
import SelectFolder from "./SelectFolder";
import useModalScrollLock from "@hooks/useModalScrollLock";

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
  folderId?: number | null;
  userId?: number | null;
  handleClickButton?: (value: string | number | null) => void;
  isPending?: boolean;
};

// CommonModal과 folder리스트를 선택하는 모달 분리하기
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
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  const buttonColor =
    color === "linear-gradient" ? styles.gradient : styles.red;

  const handleFolderSelect = (folderId: number | null) => {
    setSelectedFolderId(folderId);
  };
  useModalScrollLock(isModalShow);

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
