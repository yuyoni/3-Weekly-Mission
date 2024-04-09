import Card from "@components/card/Card";
import filterLinksBySearchText from "@utils/filterLinksBySearchText";
import { FolderData, LinkList } from "type";
import styles from "./SearchContent.module.css";
import SearchContentSkeleton from "./SearchContentSkeleton";

type SearchContentProps = {
  isLinkPending: boolean;
  inputText: string;
  links: LinkList[] | undefined;
  folders: FolderData[] | undefined;
};

export default function SearchContent({
  isLinkPending,
  inputText,
  links,
  folders,
}: SearchContentProps) {
  const filteredLinks =
    links?.filter((link: LinkList) =>
      filterLinksBySearchText(link, inputText)
    ) ?? [];

  if (isLinkPending)
    return (
      <div className={styles.wrapper}>
        <SearchContentSkeleton />
      </div>
    );

  return filteredLinks.length > 0 ? (
    <div>
      {filteredLinks.map((link) => (
        <div className={styles.wrapper} key={link.id}>
          <Card key={link.id} folders={folders} link={link} />
        </div>
      ))}
    </div>
  ) : (
    <p className={styles.no_link}>저장된 링크가 없습니다</p>
  );
}
