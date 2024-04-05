import Skeleton from "@components/skeleton/Skeleton";
import styles from "./SearchContentSkeleton.module.css";

export default function SearchContentSkeleton() {
  return (
    <>
      <div className={styles.wrapper}>
        <Skeleton />
      </div>
      <div className={styles.wrapper}>
        <Skeleton />
      </div>
      <div className={styles.wrapper}>
        <Skeleton />
      </div>
    </>
  );
}
