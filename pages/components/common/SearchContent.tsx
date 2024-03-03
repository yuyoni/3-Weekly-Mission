import Card from "@components/card/Card";
import styles from "./SearchContent.module.css";

type Props = {
  inputText: string;
  links: LinkList[] | null;
  folders: FolderData[] | null;
};

export default function SearchContent({ inputText, links, folders }: Props) {
  return (
    <div className={styles.wrapper}>
      {links ? (
        links.map((link) => {
          const searchText = inputText.toLowerCase();
          const { id, title, description, url } = link;

          if (
            inputText &&
            (title?.includes(searchText) ||
              description?.includes(searchText) ||
              url?.includes(searchText))
          ) {
            return <Card key={id} folders={folders} link={link} />;
          } else if (!inputText) {
            return <Card key={id} folders={folders} link={link} />;
          }
          return null;
        })
      ) : (
        <>"저장된 링크가 없습니다"</>
      )}
    </div>
  );
}
