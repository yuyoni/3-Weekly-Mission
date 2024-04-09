export default function handleDragAndDrop(
  event: React.DragEvent<HTMLDivElement>,
  fromIndex: number,
  toIndex: number,
  state: any,
  setState: (arg: any) => void
) {
  event.preventDefault();

  const updatedLinks = [...state];
  const draggedLink = updatedLinks[fromIndex];
  updatedLinks.splice(fromIndex, 1);
  updatedLinks.splice(toIndex, 0, draggedLink);
  setState(updatedLinks);
}
