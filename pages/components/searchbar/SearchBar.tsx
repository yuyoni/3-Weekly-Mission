import Image from "next/image";
import styles from "./SearchBar.module.css";

type Props = {
  inputText: string | undefined;
  updateInputText: (value: string) => void;
};

export default function SearchBar({ inputText, updateInputText }: Props) {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputText(e.target.value);
  };

  const onClickButton = () => {
    updateInputText("");
  };

  return (
    <div className={styles.wrapper}>
      <Image
        src="images/search.svg"
        alt="search-icon"
        width={16}
        height={16}
        priority
      />
      <input
        className={styles.search_input}
        value={inputText}
        onChange={onChangeInput}
        placeholder=" 링크를 검색해 보세요"
      />
      <button className={styles.erase_button} onClick={onClickButton}>
        <Image
          src="images/_close.svg"
          alt="close"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
}
