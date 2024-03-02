import Image from "next/image";
import { useState } from "react";
import styles from "../styles/AddLink.module.css";

interface Props {
  folderData: FolderData;
}

export default function AddLink({ folderData }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [addLinkModal, setAddLinkModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddLinkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inputValue: string
  ) => {
    e.stopPropagation();
    if (inputValue.trim().length) {
      setAddLinkModal(true);
    } else {
      alert("링크를 입력해 주세요.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src="images/link.svg"
          alt="add-link-icon"
          width={20}
          height={20}
          priority
        />
        <input
          className={styles.link_input}
          placeholder=" 링크를 추가해 보세요"
          onChange={handleInputChange}
        />
        <button
          className={styles.cta}
          onClick={(e) => {
            handleAddLinkClick(e, inputValue);
          }}
        >
          추가하기
        </button>
      </div>
      {addLinkModal ? <div>모달</div> : null}
    </div>
  );
}
