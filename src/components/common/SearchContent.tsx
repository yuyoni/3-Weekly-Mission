import Card from "@components/card/Card";
import filterLinksBySearchText from "@utils/filterLinksBySearchText";
import handleDragAndDrop from "@utils/handleDragandDrop";
import { useState } from "react";
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
  if (isLinkPending)
    return (
      <div className={styles.wrapper}>
        <SearchContentSkeleton />
      </div>
    );

  const filteredLinks =
    links?.filter((link: LinkList) =>
      filterLinksBySearchText(link, inputText)
    ) ?? [];
  const [arrangedLinks, setArrangedLinks] = useState(filteredLinks);

  return arrangedLinks.length > 0 ? (
    <div className={styles.wrapper}>
      {arrangedLinks.map((link, index) => (
        <div
          key={link.id}
          draggable
          onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("index", index.toString());
          }}
          onDragOver={(event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
          }}
          onDrop={(event: React.DragEvent<HTMLDivElement>) => {
            const fromIndex = Number(event.dataTransfer.getData("index"));
            const toIndex = index;
            handleDragAndDrop<LinkList>(
              event,
              fromIndex,
              toIndex,
              arrangedLinks,
              setArrangedLinks
            );
          }}
        >
          <Card key={link.id} folders={folders} link={link} />
        </div>
      ))}
    </div>
  ) : (
    <p className={styles.no_link}>저장된 링크가 없습니다</p>
  );
}
