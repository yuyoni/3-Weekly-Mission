import styles from "./MainDescriptionUI.module.css";

interface MainDescriptionUIProps {
  sloganHead: string;
  highlightedText: string;
  sloganTail: string;
  smallText: string;
  imgUrl: string;
  imgAlt: string;
  contentClass: string;
}

export default function MainDescriptionUI({
  sloganHead,
  highlightedText,
  sloganTail,
  smallText,
  imgUrl,
  imgAlt,
  contentClass,
}: MainDescriptionUIProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.slogan}>
          {sloganHead}
          <span
            className={`${styles.backgroundClipText} ${styles[contentClass]}`}
          >
            {highlightedText}
          </span>
          {sloganTail}
        </div>
        <div className={styles.smallText}>{smallText}</div>
        <img src={imgUrl} className={styles.sectionImg} alt={imgAlt} />
      </div>
    </section>
  );
}
