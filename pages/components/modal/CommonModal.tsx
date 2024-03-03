import styles from "./CommonModal.module.css";
import Image from "next/image";
import SelectFolder from "./SelectFolder";
import IconBox from "./IconBox";

type Props = {
  setter: (arg: boolean) => void;
  title: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  color?: string;
  folders?: FolderData[];
  icon?: boolean;
  folderId?: FolderId;
  userId?: Id;
};

export default function CommonModal({
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
}: Props) {
  const buttonColor =
    color === "linear-gradient" ? styles.gradient : styles.red;

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      setter(false);
    }
  };

  return (
    <div
      className={styles.wrapper}
      onClick={(e) => {
        e.stopPropagation();
        handleClickOutside(e);
      }}
    >
      <div className={styles.container}>
        <Image
          src="images/_close.svg"
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
        {placeholder ? (
          <input
            className={styles.input}
            type="text"
            placeholder={placeholder}
          />
        ) : null}
        <p className={styles.subtitle}>{subtitle}</p>
        {folders ? <SelectFolder folders={folders} /> : null}
        {buttonText ? (
          <button
            className={`${styles.button} ${buttonColor}`}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {buttonText}
          </button>
        ) : null}
        {icon && userId && folderId ? (
          <IconBox userId={userId} folderId={folderId} folderName={subtitle} />
        ) : null}
      </div>
    </div>
  );
}