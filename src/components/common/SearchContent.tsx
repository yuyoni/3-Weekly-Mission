import Card from "@components/card/Card";
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
  const filteredLinks = links?.filter(filterLinksBySearchText) ?? [];

  return (
    <>
      {isLinkPending ? (
        <div className={styles.wrapper}>
          <SearchContentSkeleton />
        </div>
      ) : filteredLinks.length > 0 ? (
        <div className={styles.wrapper}>
          {filteredLinks.map((link) => (
            <Card key={link.id} folders={folders} link={link} />
          ))}
        </div>
      ) : (
        <p className={styles.no_link}>저장된 링크가 없습니다</p>
      )}
    </>
  );

  function filterLinksBySearchText(link: LinkList): boolean {
    const searchText = inputText.toLowerCase();
    const { title, description, url } = link;

    if (!inputText) return true;

    return (
      title?.includes(searchText) ||
      description?.includes(searchText) ||
      url?.includes(searchText)
    );
  }
}
