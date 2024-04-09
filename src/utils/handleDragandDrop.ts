export default function handleDragAndDrop<T>(
  event: React.DragEvent<HTMLDivElement>,
  fromIndex: number,
  toIndex: number,
  state: T[],
  setState: (arg: T[]) => void
) {
  event.preventDefault();

  const updatedLinks = [...state];
  const draggedLink = updatedLinks[fromIndex];
  updatedLinks.splice(fromIndex, 1);
  updatedLinks.splice(toIndex, 0, draggedLink);
  setState(updatedLinks);
}
