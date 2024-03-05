import Card from "@components/card/Card";
import styles from "./SearchContent.module.css";

type Props = {
  inputText: string;
  links: LinkList[] | null;
  folders: FolderData[] | null;
};

export default function SearchContent({ inputText, links, folders }: Props) {
  const filteredLinks = links?.filter(filterLinksBySearchText) ?? [];

  return (
    <>
      {filteredLinks.length > 0 ? (
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
