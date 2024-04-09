import { LinkList } from "type";

export default function filterLinksBySearchText(
  link: LinkList,
  inputText: string
): boolean {
  const searchText = inputText.toLowerCase();
  const { title, description, url } = link;

  if (!inputText) return true;

  return (
    title?.includes(searchText) ||
    description?.includes(searchText) ||
    url?.includes(searchText)
  );
}
